const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const { Evaluacion } = require('../Database/Models/evaluacion')
const {
  findResultadosEvaluacion,
  findEvaluacionesAsignadas,
  calcularEvaluacionSP,
  verificarOnboardingTerminadoSP,
  obtenerCuadranteSP
} = require('../Database/CustomQuerys/Evaluacion')
const { sendEmail } = require('../Utils/email.handler')
const { User } = require('../Database/Models/usuario')
const { TipoEvaluacion } = require('../Database/Models/tipoEvaluacion')

async function getEvaluaciones(req, res, next) {
  try {
    const [
      evaluacionesResp,
      tiposEvaluacionResp,
      seccionesResp,
      preguntasResp
    ] = await findResultadosEvaluacion(req.params.idEvaluacion)
    const evaluacion = Object.values(evaluacionesResp)[0]
    if (!evaluacion) {
      return next(boom.notFound('Evaluacion no encontrada'))
    }
    const tiposEvaluacion = Object.values(tiposEvaluacionResp)
    const secciones = Object.values(seccionesResp)
    const preguntas = Object.values(preguntasResp)
    secciones.forEach((seccion) => {
      seccion.preguntas = preguntas.filter(
        (pregunta) => pregunta.idSeccion === seccion.id
      )
    })
    tiposEvaluacion.forEach((tipoEvaluacion) => {
      tipoEvaluacion.secciones = secciones.filter(
        (seccion) => seccion.idTipoEvaluacion === tipoEvaluacion.id
      )
    })
    evaluacion.tiposEvaluacion = tiposEvaluacion.filter(
      (tipoEvaluacion) => tipoEvaluacion.idEvaluacion === evaluacion.id
    )
    evaluacion.disabled = evaluacion.idUsuario === req.user.id
    success(req, res, evaluacion)
  } catch (err) {
    next(err)
  }
}

async function getEvaluacionesAsignadas(req, res, next) {
  try {
    const usuarioId =
      req.params.idUsuario !== 'undefined' ? req.params.idUsuario : req.user.id
    const usuario = await User.findOne({
      where: {
        id: usuarioId
      }
    })
    const [evaluacionesResp] = await findEvaluacionesAsignadas(usuarioId)
    const evaluaciones = Object.values(evaluacionesResp)
    let matriz = null
    if (usuario && usuario.onboardingCompleto) {
      const [resultadosResp] = await obtenerCuadranteSP(usuarioId)
      const skills = Object.values(resultadosResp)[0]?.obtenido
      const wills = Object.values(resultadosResp)[1]?.obtenido
      const skillsRealScore = getRealScore(skills)
      const willsRealScore = getRealScore(wills)
      matriz = {
        skills: skillsRealScore,
        wills: willsRealScore
      }
    }

    success(req, res, { evaluaciones, matriz })
  } catch (err) {
    next(err)
  }
}

async function putEvaluacion(req, res, next) {
  try {
    const evaluacion = await Evaluacion.findOne({
      where: {
        id: req.params.idEvaluacion
      }
    })
    if (!evaluacion) {
      return next(boom.notFound('Evaluacion no encontrada'))
    }
    const updatedEvaluacion = await evaluacion.update(req.body)
    if (req.body.completa) {
      const tiposEvaluacion = await TipoEvaluacion.findAll({
        where: {
          idEvaluacion: evaluacion.id
        }
      })
      tiposEvaluacion.forEach(async (tipoEvaluacion) => {
        await calcularEvaluacionSP(tipoEvaluacion.id)
      })
      await verificarOnboardingTerminadoSP(evaluacion.idUsuario)
      //await handleEmailNotification(evaluacion.id)
    }
    success(req, res, updatedEvaluacion)
  } catch (err) {
    next(err)
  }
}

async function handleEmailNotification(evaluacionId) {
  try {
    const evaluacion = await Evaluacion.findOne({
      where: {
        id: evaluacionId
      }
    })
    const usuario = await User.findOne({
      where: {
        id: evaluacion.idUsuario
      }
    })
    if (!usuario) {
      return
    }
    await sendEmail(
      usuario.email,
      'Evaluacion de onboarding completada!',
      evaluacionId
    )
  } catch (err) {
    console.error({ err })
  }
}

function getRealScore(obtained) {
  if (obtained < 50) return 0
  if (obtained < 70) return 1
  if (obtained < 90) return 2
  return 3
}

module.exports = {
  getEvaluaciones,
  getEvaluacionesAsignadas,
  putEvaluacion
}

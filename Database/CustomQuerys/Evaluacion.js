const { QueryTypes } = require('sequelize')
const sequelize = require('../database')

async function findEvaluacionesAsignadas(usuarioId) {
  return await sequelize.query(
    `call SPObtenerEvaluacionesAsignadas(:usuarioId)`,
    {
      replacements: { usuarioId },
      type: QueryTypes.SELECT
    }
  )
}

async function findResultadosEvaluacion(evaluacionId) {
  return await sequelize.query(
    `call SPObtenerEvaluacionCompleta(:evaluacionId)`,
    {
      replacements: { evaluacionId },
      type: QueryTypes.SELECT
    }
  )
}

async function calcularEvaluacionSP(tipoEvaluacionId) {
  return await sequelize.query(`call SPCalcularEvaluacion(:tipoEvaluacionId)`, {
    replacements: { tipoEvaluacionId },
    type: QueryTypes.RAW
  })
}

async function verificarOnboardingTerminadoSP(usuarioId) {
  return await sequelize.query(`call SPVerificarTerminado(:usuarioId)`, {
    replacements: { usuarioId },
    type: QueryTypes.RAW
  })
}

async function obtenerCuadranteSP(usuarioId) {
  return await sequelize.query(`call SPObtenerCuadrante(:usuarioId)`, {
    replacements: { usuarioId },
    type: QueryTypes.SELECT
  })
}

module.exports = {
  findEvaluacionesAsignadas,
  findResultadosEvaluacion,
  calcularEvaluacionSP,
  verificarOnboardingTerminadoSP,
  obtenerCuadranteSP
}

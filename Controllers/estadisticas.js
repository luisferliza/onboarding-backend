const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const { User } = require('../Database/Models/usuario')
const {
  findEstadisticasArea
} = require('../Database/CustomQuerys/Estadisticas')

async function getEstadisticas(req, res, next) {
  try {
    const usuario = await User.findByPk(req.user.id)
    const [
      pendientesResp,
      completosResp,
      puestosResp,
      puestoPendienteResp,
      puestoCompletoResp
    ] = await findEstadisticasArea(usuario.id, usuario.usuario)
    const pendientes = Object.values(pendientesResp)[0]?.pendientes ?? 0
    const completos = Object.values(completosResp)[0]?.completos ?? 0
    const puestos = Object.values(puestosResp)
    const puestoPendiente = Object.values(puestoPendienteResp)
    const puestoCompleto = Object.values(puestoCompletoResp)
    const puestosHash = {}
    puestos.forEach((puesto) => {
      puestosHash[puesto.puesto] = {
        puesto: puesto.puesto,
        pendientes: 0,
        completos: 0
      }
    })

    puestoPendiente.forEach((puesto) => {
      puestosHash[puesto.puesto].pendientes = puesto.total
    })
    puestoCompleto.forEach((puesto) => {
      puestosHash[puesto.puesto].completos = puesto.total
    })
    success(req, res, {
      pendientes,
      completos,
      puestos: Object.values(puestosHash)
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getEstadisticas
}

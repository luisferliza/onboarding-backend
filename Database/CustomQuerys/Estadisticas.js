const { QueryTypes } = require('sequelize')
const sequelize = require('../database')

async function findEstadisticasArea(usuarioId, usuarioDPI) {
  return await sequelize.query(`call SPEstadisticas(:usuarioId, :usuarioDPI)`, {
    replacements: { usuarioId, usuarioDPI },
    type: QueryTypes.SELECT
  })
}

module.exports = {
  findEstadisticasArea
}

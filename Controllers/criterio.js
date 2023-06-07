const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const { Criterio } = require('../Database/Models/criterio')

async function getCriterios(req, res, next) {
  try {
    const criterios = await Criterio.findAll({
      attributes: ['id', 'nombre', 'valor']
    })
    success(req, res, criterios)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getCriterios
}

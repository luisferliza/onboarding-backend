const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const {
  findResultadosEvaluacion
} = require('../Database/CustomQuerys/Evaluacion')
const {
  EvaluacionBlueprint
} = require('../Database/Models/evaluacionBlueprint')

async function getBlueprints(req, res, next) {
  try {
    const blueprints = await EvaluacionBlueprint.findAll()
    success(req, res, blueprints)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getBlueprints
}

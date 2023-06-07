const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const { Pregunta } = require('../Database/Models/pregunta')

async function putPregunta(req, res, next) {
  try {
    const pregunta = await Pregunta.update(req.body, {
      where: {
        id: req.params.idPregunta
      }
    })
    success(req, res, pregunta)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  putPregunta
}

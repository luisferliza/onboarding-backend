const express = require('express')
const { usersRouter } = require('./user.routes')
const { evaluacionRouter } = require('./evaluacion.routes')
const { criteriosRouter } = require('./criterios.routes')
const { preguntasRouter } = require('./pregunta.routes')
const { authRouter } = require('./auth.routes')
const { personalRouter } = require('./personal.routes')
const { blueprintRouter } = require('./blueprint.routes')
const { estadisticasRouter } = require('./estadisticas.routes')

function routerAPI(app) {
  // Se separa un router para la primera version
  const routerV1 = express.Router()
  app.use('/api/v1', routerV1)
  routerV1.use('/usuarios', usersRouter)
  routerV1.use('/evaluaciones', evaluacionRouter)
  routerV1.use('/criterios', criteriosRouter)
  routerV1.use('/preguntas', preguntasRouter)
  routerV1.use('/auth', authRouter)
  routerV1.use('/personal', personalRouter)
  routerV1.use('/blueprints', blueprintRouter)
  routerV1.use('/estadisticas', estadisticasRouter)
}

module.exports = {
  routerAPI
}

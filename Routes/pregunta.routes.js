const express = require('express')
const { putPregunta } = require('../Controllers/pregunta')

const router = express.Router()

router.put('/:idPregunta', putPregunta)

module.exports = { preguntasRouter: router }

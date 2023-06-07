const express = require('express')
const {
  getEvaluaciones,
  getEvaluacionesAsignadas,
  putEvaluacion
} = require('../Controllers/evaluacion')
const { verifyToken } = require('../Middleware/auth.middleware')

const router = express.Router()

router.get('/:idEvaluacion', verifyToken, getEvaluaciones)
router.get('/usuario/:idUsuario', verifyToken, getEvaluacionesAsignadas)
router.put('/:idEvaluacion', putEvaluacion)

module.exports = { evaluacionRouter: router }

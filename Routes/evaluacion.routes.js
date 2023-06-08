const express = require('express')
const {
  getEvaluaciones,
  getEvaluacionesAsignadas,
  putEvaluacion,
  postEvaluacion
} = require('../Controllers/evaluacion')
const { verifyToken } = require('../Middleware/auth.middleware')

const router = express.Router()

router.get('/:idEvaluacion', verifyToken, getEvaluaciones)
router.get('/usuario/:idUsuario', verifyToken, getEvaluacionesAsignadas)
router.post('/', verifyToken, postEvaluacion)
router.put('/:idEvaluacion', putEvaluacion)

module.exports = { evaluacionRouter: router }

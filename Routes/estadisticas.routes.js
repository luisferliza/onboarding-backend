const express = require('express')
const { getEstadisticas } = require('../Controllers/estadisticas')
const { verifyToken } = require('../Middleware/auth.middleware')

const router = express.Router()

router.get('/', verifyToken, getEstadisticas)

module.exports = { estadisticasRouter: router }

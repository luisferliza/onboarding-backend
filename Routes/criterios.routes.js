const express = require('express')
const { getCriterios } = require('../Controllers/criterio')

const router = express.Router()

router.get('/', getCriterios)

module.exports = { criteriosRouter: router }

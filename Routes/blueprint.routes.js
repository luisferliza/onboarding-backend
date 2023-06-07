const express = require('express')
const { verifyToken } = require('../Middleware/auth.middleware')
const { getBlueprints } = require('../Controllers/evalaucionBlueprint')

const router = express.Router()

router.get('/', verifyToken, getBlueprints)

module.exports = { blueprintRouter: router }

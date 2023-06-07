const express = require('express')
const { getPersonalAMiCargo } = require('../Controllers/personal')
const { verifyToken } = require('../Middleware/auth.middleware')

const router = express.Router()

router.get('/', verifyToken, getPersonalAMiCargo)

module.exports = { personalRouter: router }

const express = require('express')
const { getUsers } = require('../Controllers/user')

const router = express.Router()

router.get('/', getUsers)

module.exports = { usersRouter: router }

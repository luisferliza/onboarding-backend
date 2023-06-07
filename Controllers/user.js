const boom = require('@hapi/boom')
const { User } = require('../Database/Models/usuario')
const { success } = require('../Utils/response.handler')

async function getUsers(req, res, next) {
  try {
    const users = await User.findAll()
    success(req, res, users)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUsers
}

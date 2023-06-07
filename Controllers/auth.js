const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { success } = require('../Utils/response.handler')
const { USER_TABLE, User } = require('../Database/Models/usuario')

async function validateToken(req, res, next) {
  try {
    // La ruta es protegida, por lo que el token debe estar presente
    success(req, res, 'Successfully')
  } catch (err) {
    next(err)
  }
}

async function authenticate(req, res, next) {
  try {
    const authKeys = req.body
    const authUser = await User.findOne({
      where: {
        usuario: authKeys.usuario || null
      }
    })
    if (authUser) {
      if (await bcrypt.compare(authKeys.password, authUser.password)) {
        const jwtToken = createToken(authUser.get())
        success(req, res, jwtToken)
      } else {
        next(boom.unauthorized())
      }
    } else {
      next(boom.unauthorized())
    }
  } catch (err) {
    next(err)
  }
}

const createToken = (user) => {
  delete user.password
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  // Campos para uso del FrontEnd, no se debe utilizar el campo email o nombre en el backend, solo leerlos del token encriptado
  return {
    token: accessToken,
    email: user.email,
    nombre: user.nombreCompleto,
    usuario: user.usuario
  }
}

module.exports = {
  validateToken,
  authenticate
}

const boom = require('@hapi/boom')
const { success } = require('../Utils/response.handler')
const { User } = require('../Database/Models/usuario')

async function getPersonalAMiCargo(req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id
      }
    })
    const personal = await User.findAll({
      where: {
        jefeInmediato: user.usuario
      },
      order: [['onboardingCompleto', 'DESC']]
    })
    success(req, res, personal)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getPersonalAMiCargo
}

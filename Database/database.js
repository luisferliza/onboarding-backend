const { Sequelize } = require('sequelize')
const setupModels = require('./Models')

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: console.log
  }
)

setupModels(sequelize)

//sequelize.sync()

module.exports = sequelize

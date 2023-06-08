const assert = require('assert')
const { Criterio } = require('../Database/Models/criterio')
const { expect } = require('chai')
const DEV = '.env'
require('dotenv').config({ path: DEV })
require('../Database/database')

describe('Funciones para obtener los criterios', function () {
  it('Criterio findAll deberia de retornar una lista de criterios', async function () {
    const criterios = await Criterio.findAll({
      attributes: ['id', 'nombre', 'valor']
    })
    expect(criterios).to.be.an('array')
  })

  it('Criterio findAll deberia de retornar 4 criterios', async function () {
    const criterios = await Criterio.findAll({
      attributes: ['id', 'nombre', 'valor']
    })
    expect(criterios).to.have.lengthOf(4)
  })
})

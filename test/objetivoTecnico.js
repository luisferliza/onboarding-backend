const assert = require('assert')
const { Criterio } = require('../Database/Models/criterio')
const { expect } = require('chai')
const { ObjetivoTecnico } = require('../Database/Models/objetivoTecnico')
const DEV = '.env'
require('dotenv').config({ path: DEV })
require('../Database/database')

describe('Funciones para obtener los objetivos de la parte de Skills de la evaluación', function () {
  it('ObjetivoTecnico findAll deberia de retornar una lista de objetivos', async function () {
    const objetivos = await ObjetivoTecnico.findAll()
    expect(objetivos).to.be.an('array')
  })

  it('ObjetivoTecnico findAll deberia de retornar 3 objetivos', async function () {
    const objetivos = await ObjetivoTecnico.findAll()
    expect(objetivos).to.have.lengthOf(3)
  })

  it('Los primer objetivo debería ser Objetivos de Aprendizaje', async function () {
    const objetivos = await ObjetivoTecnico.findAll()
    expect(objetivos[0].nombre).to.be.equal('Objetivos de Aprendizaje')
  })
})

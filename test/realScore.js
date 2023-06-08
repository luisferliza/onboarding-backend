const assert = require('assert')
const { Criterio } = require('../Database/Models/criterio')
const { expect } = require('chai')
const { getRealScore } = require('../Controllers/evaluacion')

describe('Funciones para validar que el valor de la evaluacion se catalogue de 0-3', function () {
  it('Si el valor obtenido es menor a 50, debería retornar 0', async function () {
    const valor = 40
    const obtenido = getRealScore(valor)
    expect(obtenido).to.be.equal(0)
  })

  it('Si el valor obtenido es menor a 70, debería retornar 1', async function () {
    const valor = 60
    const obtenido = getRealScore(valor)
    expect(obtenido).to.be.equal(1)
  })

  it('Si el valor obtenido es menor a 90, debería retornar 2', async function () {
    const valor = 80
    const obtenido = getRealScore(valor)
    expect(obtenido).to.be.equal(2)
  })

  it('Si el valor obtenido es mayor a 90, debería retornar 3', async function () {
    const valor = 100
    const obtenido = getRealScore(valor)
    expect(obtenido).to.be.equal(3)
  })
})

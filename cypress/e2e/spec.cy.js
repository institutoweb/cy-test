/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://institutoweb.com.ar/test/login.html')

    cy.get('#tuusuario').type("UsuarioNuevo")
    cy.get('#tuclave').type("clavesecreta")
    cy.get('#tumail').type("daniel@gmail.com")
    cy.get(':nth-child(8)').click()

    cy.get('#volver').click()
  })
})

/// <reference types="Cypress" />

describe('Home', () => {
  it('visit the page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Intro: should have a title', () => {
    const section = cy.get('[data-cy="intro"]')
    section.get('h1').should('be.visible')
  })

  it('Intro: should have contact button', () => {
    const section = cy.get('[data-cy="intro"]')
    section.get('[data-cy="contact"]').contains('Kontakt aufnehmen')
    section.get('[data-cy="contact"]').should('have.attr', 'href', 'mailto:markussom@gmail.com')
  })

  it('Personal: should have a image', () => {
    // Start from the index page
    const section = cy.get('[data-cy="personal"]')
    section.get('[data-cy="personalImage"]').should('be.visible')
  })

  it('Personal: should have a title', () => {
    const section = cy.get('[data-cy="personal"]')
    section.get('h2').should('be.visible')
  })
})

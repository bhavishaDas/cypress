/// <reference types="cypress" />

describe('Facebook Login', () => {
  beforeEach(() => {
    cy.visit('https://facebook.com')
  })

  it('Loads the login page without errors', () => {
    cy.getByTestId('royal_email').should('exist')
    cy.getByTestId('royal_pass').should('exist')
  })

  it('Logs in successfully', () => {
    cy.fixture('login').then(login => {
      cy.getByTestId('royal_email').type(login.auth.username)
      cy.getByTestId('royal_pass').type(login.auth.password)
    })

    cy.getByTestId('royal_login_button').click();
    cy.getById('jsc_c_25').should('exist') // Verifies the profile icon
  });
})

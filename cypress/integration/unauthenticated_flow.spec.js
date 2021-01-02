describe('Facebook Unauthenticated flow', () => {

  it('Loads cypress facebook page for a non authenticated user', () => {
    cy.visit('https://www.facebook.com/cypressio/')
    cy.getById('seo_h1_tag').contains('Cypress.io')
  })


  it('Loads cypress facebook page for a non authenticated user', () => {
    cy.visit('https://www.facebook.com/cypressio/')
    cy.getById('pagelet_growth_expanding_cta')
      .should('exist')
  })
})

Cypress.Commands.add('getByTestId', id => cy.get(`[data-testid=${id}]`));

Cypress.Commands.add('getById', id => cy.get(`[id=${id}]`));
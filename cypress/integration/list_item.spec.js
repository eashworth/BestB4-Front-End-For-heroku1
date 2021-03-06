// As a user
// So I can give away food I won't use
// I can list a food item

describe('Home page', function() {
  it('allows user to cerate a new post', function() {
    cy.visit('/');
    cy.get('a[name=login]').click();
    cy.get('input[name=email]').type(`happy@gmail.com{enter}`)
    cy.get('input[name=password]').type(`123456{enter}`)
    cy.get('.form > [name="description"] ').type('Bacon')
    cy.get('.form > [name="expiry"] ').type('25/12/2019') // change entry format 
    cy.get('.flex_container>.post-form>.form>.btn').click();
    cy.url().should('include', '/profile')
  });
});

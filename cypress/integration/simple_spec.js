describe('Smoke Tests', function() {
  beforeEach(function(){
    cy.visit('http://localhost:8080/')
  })

  it('visits home page and verify title', function() {
    cy.title().should('include', 'Quandoo challenge')
  })

  it('type into Select-control', function() {
    cy.get('.Select-control').click()
    cy.get('.Select-multi-value-wrapper').first()
    cy.get('form').submit() 
  })
})

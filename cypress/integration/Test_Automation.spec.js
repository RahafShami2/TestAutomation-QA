// Test_Automation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
      
cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/')
      
const username = 'blabla'
const password = '123123'
cy.get('[id=username]').type(`${username}`)
cy.get('[id=password]').type(`${password}`)
cy.get('[value=Login]').click()

  })
 })
      

// Test_Automation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('First test check search', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/')
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
    })
})

//Verify search page with generating the correct result or not by adding valid search.
describe('First test check search', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/')
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type('Agile')
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page with Translate arabic word input to english .
describe('TC2', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type('تحليل')
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('[test-data="translateInput"]').select("English")
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page without entering anything in the search field .
describe('TC3', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page With Search about key word in the title of the course .
describe('TC4', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type('data')
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('input[name="search_in_title"]').click()
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page With Search about key word not match the title of the course .
describe('TC5', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type('okey')
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('input[name="search_in_title"]').click()
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page With Sort result based on user reviews
describe('TC6', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type('everyone')
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('input[name="sort_by_user_reviews"]').click()
cy.get('[test-data="searchButton"]').click()
})
})

//Verify search page With delete word from search box .
describe('TC13', () => {
    it('Visits the Kitchen Sink', () => {     
  cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
const username="rahafShami"
const password="rahaf2002"
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)
cy.contains('Search').click();
cy.get('[class="tagify__input"]').type(`تحليل{enter}`)
cy.get('[class="tagify__input"]').type('الأدلة')
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('[test-data="translateInput"]').select("English")
cy.get('[test-data="searchButton"]').click()
cy.get('[value="الأدلة"] [class="tagify__tag__removeBtn"]').click()
cy.get('[test-data="searchButton"]').click()
})
})

//Verify Change search page User Interface.
describe('TC15', () => {
    describe('First test check search');
cy.get('[class="tagify__input"]').type(`بيانات`)
cy.get('[test-data="AdvancedOptions"]').click()
cy.get('input[name="match_all"]').click()
cy.get('input[name="case_sensitive"]').click()
cy.get('input[name="search_in_title"]').click()
cy.get('input[name="sort_by_user_reviews"]').click()
cy.get('[test-data="translateInput"]').select("English")
cy.get('[test-data="searchButton"]').click()
cy.get('[test-data="translateInput"]').select("Greek")
cy.get('[test-data="searchButton"]').click()
})


      

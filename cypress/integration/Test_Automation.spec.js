describe('Test skills Match app', () => {
    beforeEach(() => {
      cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/') 
      const username = 'blabla'
      const password = '123123'
      cy.get('[id=username]').type(`${username}`)
      cy.get('[id=password]').type(`${password}{enter}`)      
    })

    //TC
    it('Verify search page With cource contains all of the keywords .', () => {  
      cy.get('div.navbar-collapse > ul > li:nth-child(3) > a')
          .invoke('attr', 'href')
          .then(href => {
              cy.visit('https://skillsmatch.mdx.ac.uk/'+href);
            });
      const SKIKK_KEY_WORD = 'software'
      const SKIKK_KEY_WORD2 = 'java'
      cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD}{enter}`)
      cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD2}`)
      cy.get('[test-data=AdvancedOptions]').click()
      cy.get('div.card-body > div:nth-child(1)>input').click();
      cy.get('[test-data=searchButton]').click()
      cy.get('.search-result-box')    
          .each($div => {
                  cy.get('[class=search-item]')    
                  .each($span => {
                    cy.get('[test-data=MatchedKeywords]').first().should('have.text' , '\n            software\n        ')
                    cy.get('[test-data=MatchedKeywords]').last().should('have.text' , '\n            java\n        ')
                  })
          })
    })
  
  

//TC 
    it('Verify search page with Translate arabic word input to English .', () => {
      cy.get('div.navbar-collapse > ul > li:nth-child(3) > a')
          .invoke('attr', 'href')
          .then(href => {
              cy.visit('https://skillsmatch.mdx.ac.uk/'+href);
      });
      const SKIKK_KEY_WORD = 'تصنيفات'
      cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD}`).type('{enter}');
      cy.get('[test-data=AdvancedOptions]').click()
      cy.get('[test-data=translateInput]').select("English")
      cy.get('[test-data=searchButton]').click()
      
      cy.get('.search-result-box')    
          .each($div => {
                    cy.get('[test-data=MatchedKeywords]').first().should('have.text' , '\n            ratings\n        ')
          })
    })
  })


      

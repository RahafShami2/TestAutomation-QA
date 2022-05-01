describe('SkillMatch Test', () => {


    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
  
      //so here is our precondetion before each test case we make visir skill match url page
      //and login functionality work automaticly :
      cy.visit('https://skillsmatch.mdx.ac.uk/accounts/login/?next=/en/')
        
      const userName = 'blabla'
      const passWord = '123123'
      //enter userName > 'blabla' in username input :
      cy.get('[id=username]').type(`${userName}`)
  
      //enter passWord > '123123' in passWord input :
      cy.get('[id=password]').type(`${passWord}`)
      //get login button element and click on it:
      cy.get('[value=Login]').click()
      
    })
  
  
     //TS2 ---> TC2
      //This is our secound test case to Verify search page With cource contains all of the keywords :
      it('Verify search page With cource contains all of the keywords .', () => {
  
        //first we get href for search link in tap bar and we pass it's xpath to get function in cypress
        //then we visit search page py 'https://skillsmatch.mdx.ac.uk/'+href url.  
        cy.get('div.navbar-collapse > ul > li:nth-child(3) > a')
            .invoke('attr', 'href')
            .then(href => {
                cy.visit('https://skillsmatch.mdx.ac.uk/'+href);
        });
    
        // we initailize an constant variable (SKIKK_KEY_WORD) and assign it's value with 'software'
        const SKIKK_KEY_WORD = 'software'
        // we initailize an constant variable (SKIKK_KEY_WORD2) and assign it's value with 'java'
        const SKIKK_KEY_WORD2 = 'java'
        //enter SKIKK_KEY_WORD > 'software' in tagify__input or search input and press enter :
        cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD}`).type('{enter}');
        //enter SKIKK_KEY_WORD2 > 'java' in tagify__input or search input and press enter :
        cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD2}`).type('{enter}');
        //get AdvancedOptions Button element and click on it:
        cy.get('[test-data=AdvancedOptions]').click()
        //get the input of first child "With all of the keywords" for AdvancedOptions and click on it:
        cy.get('div.card-body > div:nth-child(1)>input').click();
        //get search Button element and click on it:
        cy.get('[test-data=searchButton]').click()
        //we initailize an variable (MatchedKeywordIndex) with initial value -1 : to using it to acsses to the MatchedKeywords .
        let MatchedKeywordIndex = -1;
        //get search-result-box element witch have all search results :
        //for each div in search-result-box we will get search-item  elements and pass on each span element on it
        //then check if MatchedKeywords(MatchedKeywordIndex) hahve software or java key words respectively.
        cy.get('.search-result-box')    
            .each($div => {
                    cy.get('.search-item')    
                    .each($span => {
    
                      MatchedKeywordIndex+=1;
                      cy.get('[test-data=MatchedKeywords]').eq(MatchedKeywordIndex).should('have.text' , '\n            software\n        ')
    
                      MatchedKeywordIndex+=1;
                      cy.get('[test-data=MatchedKeywords]').eq(MatchedKeywordIndex).should('have.text' , '\n            java\n        ')
                      
                    })
            })
      })
    
     //TS2 ---> TC5
      //This is our Fifth test case to Verify search page With Translate arabic word input to English :
      it('Verify search page with Translate arabic word input to English .', () => {
    
        //first we get href for search link in tap bar and we pass it's xpath to get function in cypress
        //then we visit search page py 'https://skillsmatch.mdx.ac.uk/'+href url.  
        cy.get('div.navbar-collapse > ul > li:nth-child(3) > a')
            .invoke('attr', 'href')
            .then(href => {
                cy.visit('https://skillsmatch.mdx.ac.uk/'+href);
        });
    
        // we initailize an constant variable (SKIKK_KEY_WORD) and assign it's value with 'تصنيفات'
        const SKIKK_KEY_WORD = 'تصنيفات'
        //enter SKIKK_KEY_WORD > 'تصنيفات' in tagify__input or search input and press enter :
        cy.get('[class=tagify__input]').type(`${SKIKK_KEY_WORD}`).type('{enter}');
    
        //get AdvancedOptions Button element and click on it:
        cy.get('[test-data=AdvancedOptions]').click()
        //get translateInput element and select English from it :
        cy.get('[test-data=translateInput]').select("English")
        //get search Button element and click on it:
        cy.get('[test-data=searchButton]').click()
    
        //we initailize an variable (MatchedKeywordIndex) with initial value -1 : to using it to acsses to the MatchedKeywords .
        let MatchedKeywordIndex =-1;
    
        //get search-result-box element witch have all search results :
        //for each div in search-result-box we will get search-item  elements and pass on each span element on it
        //then check if MatchedKeywords(MatchedKeywordIndex) have ratings(Translate "التصنيفات" in English) or not.
        cy.get('.search-result-box')    
            .each($div => {
                    cy.get('[class=search-item]')    
                    .each($span => {
    
                        MatchedKeywordIndex+=1;
                        cy.get('[test-data=MatchedKeywords]').eq(MatchedKeywordIndex).should('have.text' , '\n            ratings\n        ')
    
                    })
            })
      })
    
  
  })
        

describe('Cypress test code breaker', () => {
    it('Assert code breaker', () => {
      expect(true).to.equal(true)
    })

    it('Visits cypress test webpage ', () => {
      cy.visit('http://localhost:4200/')
      cy.contains('Comenzar a jugar').click()
    //   cy.get('button').then(($btn) => {
    //     if ($btn.hasClass('active')) {
    //       // do something if it's active
    //     } else {
    //       // do something else
    //     }
    //   }
      cy.get('#name')

      .type('9858')
      .type('{enter}')

      
      cy.get('.response')
      cy.contains('X--')
      //.should('have.value','X--')
      //.next().should('contain', 'X--')

    })
})
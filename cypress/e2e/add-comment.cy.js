describe('add comment', () => {
    it('add a commentary and check if he is here after post', () => {
      cy.visit('http://localhost:8080/#/login')
      cy.get('[data-cy = "login-input-username"]').type('test@gmail.com')
      cy.get('[data-cy = "login-input-password"]').type('testtest')
      cy.get('[data-cy = "login-submit"]').click()

      cy.url().should('eq', 'http://localhost:8080/#/')

      cy.get('[data-cy = "nav-link-reviews"]').click()

      cy.get('[data-cy="review-input-rating-images"] img').eq(3).click() 


     cy.get('[data-cy="review-input-title"]').type("<script>alert('XSS')</script>")
     cy.get('[data-cy="review-input-comment"]').type("Bonjour")

     cy.get('[data-cy="review-submit"]').click()

     cy.get('[data-cy="review-detail"]').should('contain', 'Super produit !')

    })
  })
describe('order add', () => {
    it('should add a product to the basket', () => {
        cy.visit('http://localhost:8080/#/login')

        cy.get('[data-cy = "login-input-username"]').type('test@gmail.com')
        cy.get('[data-cy = "login-input-password"]').type('testtest')
        cy.get('[data-cy = "login-submit"]').click()
  
        cy.get('[data-cy = "product-home-link"]').eq(2).click()
        cy.url().should('include', '/products/').then(() => {
            cy.log('Navigué vers la page produit')
        })        
        cy.get('[data-cy = "detail-product-add"]').should('be.visible').and('not.be.disabled').click()
        cy.get('[data-cy = "nav-link-cart"]').click()
        cy.get('[data-cy="cart-line"]').should('exist')
    })
  })
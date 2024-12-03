describe('basket page', () => {
    it('should add a product to the basket and verify it is in the basket', () => {
      cy.visit('http://localhost:8080/#/login')

      cy.get('[data-cy = "login-input-username"]').type('test@gmail.com')
      cy.get('[data-cy = "login-input-password"]').type('testtest')
      cy.get('[data-cy = "login-submit"]').click()

      cy.get('[data-cy = "product-home-link"]').first().click()
      cy.get('[data-cy = "detail-product-add"]').click()
      cy.get('[data-cy = "nav-link-cart"]').click()

      cy.get('[data-cy = "cart-input-lastname"]').clear().type('Doe')
      cy.get('[data-cy = "cart-input-firstname"]').clear().type('John')
      cy.get('[data-cy = "cart-input-address"]').type('15 place de la bourse')
      cy.get('[data-cy = "cart-input-zipcode"]').type('33000')
      cy.get('[data-cy = "cart-input-city"]').type('Bordeaux')
      cy.get('[data-cy = "cart-submit"]').click()

    })
  })
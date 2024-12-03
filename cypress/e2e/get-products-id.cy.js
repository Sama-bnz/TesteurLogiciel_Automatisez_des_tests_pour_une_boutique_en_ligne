describe('product id page', () => {
    it('test navigate to product page and looking for product', () => {
      cy.visit('http://localhost:8080/#/')
      cy.get('[data-cy = "nav-link-products"]').click()
      cy.get('[data-cy = "product-link"]').first().click()
    })
  })
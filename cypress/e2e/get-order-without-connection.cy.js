describe('order-page', () => {
    it('test order page without connection, we should get an 401 error', () => {
      cy.visit('http://localhost:8080/#/cart')
    })
  })
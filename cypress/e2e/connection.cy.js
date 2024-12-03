describe('connection page', () => {
    it('test connection form', () => {
      cy.visit('http://localhost:8080/#/login')
      cy.get('[data-cy = "login-input-username"]').type('test@gmail.com')
      cy.get('[data-cy = "login-input-password"]').type('testtest')
      cy.get('[data-cy = "login-submit"]').click()
    })
  })
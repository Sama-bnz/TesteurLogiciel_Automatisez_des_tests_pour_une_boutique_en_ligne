describe('Smoke Tests', () => {
    // Vérification des champs et boutons de connexion
    it('should display login fields and button', () => {
      cy.visit('http://localhost:8080/#/login')
  
      cy.get('[data-cy="login-input-username"]').should('be.visible')
      cy.get('[data-cy="login-input-password"]').should('be.visible')
      cy.get('[data-cy="login-submit"]').should('be.visible').and('not.be.disabled')
    })
     // Vérification des boutons d'ajout au panier (après connexion)
    it('should display add to cart buttons when logged in', () => {
    // Étape 1 : Connexion
    cy.visit('http://localhost:8080/#/login')
    cy.get('[data-cy="login-input-username"]').type('test@gmail.com')
    cy.get('[data-cy="login-input-password"]').type('testtest')
    cy.get('[data-cy="login-submit"]').click()

    // Étape 2 : Vérifier qu'on est sur la page principale
    cy.url().should('eq', 'http://localhost:8080/#/')

    // Étape 3 : Naviguer vers la page produit
    cy.get('[data-cy="nav-link-products"]').click()
    cy.url().should('include', '/products')

    // Étape 4 : Vérifier la présence des boutons d'ajout au panier
    cy.get('[data-cy="product-link"]').should('be.visible')
  })
   // Vérification du champ de disponibilité du produit
   it('should display product availability', () => {
    // Naviguer vers un produit
    cy.visit('http://localhost:8080/#/products/3') 

    // Vérifier la présence du champ de disponibilité
    cy.get('[data-cy="detail-product-stock"]').should('be.visible').and('contain', 'en stock')
  })
})

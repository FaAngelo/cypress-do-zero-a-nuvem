/// <reference types="cypress"/>

Cypress._.times(5,()=>{
    describe('Política de privacidade', () => {
        it('testa a política de privacidade de forma independente',() => {
            cy.visit('/src/privacy.html')
            cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
        })
    })
})

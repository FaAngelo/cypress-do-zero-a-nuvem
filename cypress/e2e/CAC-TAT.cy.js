/// <reference types="cypress"/>

describe('Central de atendimento ao cliente TAT', () => {
    beforeEach(() => {
        cy.visit('src/index.html')
    })
    it('Verifica o título da aplicação', () => {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', () => {
        const longText = Cypress._.repeat('Testes automatizados utilizando o cypress', 10)
        cy.get('#firstName').type('Fabíola')
        cy.get('#lastName').type('Ângelo')
        cy.get('#email').type('teste@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('#firstName').type('Fabíola')
        cy.get('#lastName').type('Ângelo')
        cy.get('#email').type('testegmail.com')
        cy.get('#open-text-area').type('Testes automatizados utilizando o cypress')
        cy.get('button').click()
        cy.get('.error').should('be.visible')
    })
    it('valores não-numérico digitado', () => {
        cy.get('#phone')
            .type('testes')
            .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Fabíola')
        cy.get('#lastName').type('Ângelo')
        cy.get('#email').type('teste@gmail.com')
        cy.get('#open-text-area').type('Testes automatizados utilizando o cypress')
        cy.get('#phone-checkbox').check()
        cy.get('button').click()
        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
            .type('Fabíola')
            .should('have.value', 'Fabíola')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('Ângelo')
            .should('have.value', 'Ângelo')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('teste@gmail.com')
            .should('have.value', 'teste@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone').type('88996321457')
            .should('have.value', '88996321457')
            .clear()
            .should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('button').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', () => {
        const data = {
            firstname: 'Fa',
            lastname: 'Angelo Silva',
            email: 'testes@gmail.com',
            text: 'Teste.'
        }
        cy.fillMandatoryFieldsAndSubmit(data)
        cy.get('.success').should('be.visible')
    })
    it('seleciona um produto (YouTube) por seu texto',()=>{
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
    })
    it('seleciona um produto (Mentoria) por seu valor (value)',()=>{
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    })
    it('seleciona um produto (Blog) por seu índice',()=>{
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })
    it('marca o tipo de atendimento "Feedback"',()=>{
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('be.checked')
    })
    it('marca cada tipo de atendimento',()=>{
        cy.get('input[type="radio"]')
        .each((typeOffService)=>{
            cy.wrap(typeOffService)
            .check()
            .should('be.checked')
        })
    })
})
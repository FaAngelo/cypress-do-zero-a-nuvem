Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data= {
    firstname: 'John',
    lastname: 'Eduard',
    email: 'test@gmail.com',
    text: 'Test'
})=>{
    const longText = Cypress._.repeat('Testes automatizados utilizando o cypress', 10)
        cy.get('#firstName').type(data.firstname)
        cy.get('#lastName').type(data.lastname)
        cy.get('#email').type(data.email)
        cy.get('#open-text-area').type(data.text)
        cy.get('button').click()
})
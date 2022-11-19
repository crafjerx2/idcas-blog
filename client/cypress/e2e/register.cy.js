describe('Register tests', () => {

  it('register a user successfully', () => {
    // arrange
    cy.visit('/register')

    // action
    cy.get('[type="text"]').type('Joe2')
    cy.get('[type="email"]').type('joe2@gmail.com')
    cy.get('[type="password"]').type('123456')
    cy.get('.registerSubmit').click()

    //assert
    cy.get('.notification').should('have.text', 'Usuario creado satisfactoriamente')
  })

})

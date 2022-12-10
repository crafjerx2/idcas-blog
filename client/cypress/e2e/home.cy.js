describe('Home tests', () => {

  beforeEach(() => {
    cy.visit('/login')
    cy.login('cpineda@idcas.edu.do', '123456')

  })

  context('Header tests', () => {
    it('home test header', () => {
      cy.get('.headerTitleSm').should('have.text', 'IDCAS - Calidad que Trasciende')
      cy.get('.headerTitleLg').should('have.text', 'Blog')
    })
  })

  context('Sidebar Tests', () => {
    it('sidebar - categories', () => {
      cy.get(':nth-child(2) > .sidebarTitle').should('have.text', 'Categorías')
    })

    it('sidebar - nosotros', () => {
      cy.get(':nth-child(1) > .sidebarTitle').should('have.text', 'Nosotros')
    })
  })
  

})
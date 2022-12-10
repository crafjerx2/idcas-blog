import Menu from "./components/Menu"
import Notification from "./components/Notification"
import loginPage from "./pages/loginPage"


describe('Login tests', () => {

  // Hooks
  beforeEach(() => {
    cy.visit('/login')
  })

  it('login successfully', () => {

   cy.fixture('users').then( user => {
    cy.login(user.email, user.password)
   })
     
    cy.get('.topImage').should('exist')
    Menu.navigateHome();
  })

  it('login - email empty', () => {
    loginPage.passwordInput().type('123456')
    loginPage.submit().click();

   Notification.check(Notification.messages.login.es.emailRequired)
  })
  
  it('login - password empty', () => {
    loginPage.emailInput().type('test@test.com')
    loginPage.submit().click()

    Notification.check('El password es obligatorio')
  })


})
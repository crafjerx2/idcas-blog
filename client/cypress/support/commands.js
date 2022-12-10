import loginPage from '../e2e/pages/loginPage.js'

Cypress.Commands.add('login', (email, pass) => {
  loginPage.emailInput().type(email)
  loginPage.passwordInput().type(pass)
  loginPage.submit().click()
})





const emailInput = () => {
  return cy.get('[type="email"]');
}

const passwordInput = () => {
  return cy.get('[type="password"]');
}

const submit = () => {
  return cy.get('.loginSubmit');
}



export default {
  emailInput,
  passwordInput,
  submit
}






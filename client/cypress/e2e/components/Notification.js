
const check = message => {
  cy.get('.notification').should('have.text', message)
}

// const checkName = (message) => {
//   fixture('register').then(register  => {
//     check(register.nameRequired)
//   })
// }

const messages = {
  register: {
    es: {
      nameRequired: 'El nombre es obligatorio'
    },
    en: {
      nameRequired: 'Name is required'
    }
  },
  login: {
    es: {
      emailRequired: 'El email es obligatorio'
    }
  },
  cart: {

  }
}


export default {
  check,
  messages
}




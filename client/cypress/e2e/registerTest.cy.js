
import Notification  from './components/Notification.js';


describe('Register tests', () => {

  it('test', () => {
    cy.visit('/register');
    cy.get('.registerSubmit').click();
    Notification.check(Notification.messages.register.es.nameRequired)

  }) 


})
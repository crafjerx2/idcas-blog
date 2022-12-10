

const navigateHome = () => {
  cy.get('.top > .topCenter .topListItem:nth-child(1)').click(); 
}


export default {
  navigateHome
}
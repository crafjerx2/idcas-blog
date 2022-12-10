
import {urlAPI} from '../helpers/api'

describe('Users test with api', () => {

  let userId;
  let userIdUpdate;
  let userIdDelete;

  before(() => {
    
     //PreCodition Update
     const newUser = {
      name: 'Carlos Pineda',
      email: 'newuser@test.com',
      password: '123456'
    };
    cy.request({
      method: 'POST',
      url: urlAPI,
      body: newUser
    }).then(res => {

      userIdUpdate = res.body.id;
    
    });

    //PreCodition Delete
    const newUserDe = {
      name: 'Carlos Pineda',
      email: 'newuser@test.com',
      password: '123456'
    };
    cy.request({
      method: 'POST',
      url: urlAPI,
      body: newUserDe
    }).then(res => {
      userIdDelete = res.body.id;
    });


  })

  it('Get all users test', () => {

    cy.request(urlAPI)
    .then( res => {
      expect(res.status).to.eq(200);
      expect(res.duration).to.be.below(50);
      expect(res.body).to.not.be.empty;
    });

  }); 

  it('Create user test', () => {
    const newUser = {
      name: 'Carlos Pineda',
      email: 'newuser@test.com',
      password: '123456'
    };

    cy.request({
      method: 'POST',
      url: urlAPI,
      body: newUser
    })
    .then( res => {
      expect(res.status).to.eq(201);
      expect(res.body.name).to.eq(newUser.name);
      expect(res.body.email).to.eq(newUser.email);
      expect(res.body.password).to.eq(newUser.password);
    })
  })

  it('Update user test', () => {
   

    const newUserUpdated = {
      name: 'Carlos Made ',
      email: 'newuser@QA.com',
      password: '1234567'
    };

    cy.request({
      method: 'PUT',
      url: `${urlAPI}/${userIdUpdate}`,
      body: newUserUpdated
    })
    .then( res => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eq(newUserUpdated.name);
      expect(res.body.email).to.eq(newUserUpdated.email);
      expect(res.body.password).to.eq(newUserUpdated.password);
    })

    
  })

  it('Delete users ', () => {
    cy.request('DELETE', `${urlAPI}/${userIdDelete}`)
    .then( res => {
      expect(res.status).to.eq(200);
    });

  })


  after(() => {
      //Post Condition
  })


});
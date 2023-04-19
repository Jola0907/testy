

 //<reference types="cypress"/>

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://zero.webappsecurity.com/');
    cy.login('user888@gmail.com.', '1234567890');

  })
  it('Pay Saved Payee', () => {

    cy,get('#pay_bills_tab > a').click();

    cy.get('#sp_amount').type('100');
    cy.get('#sp_date').type('2023-03-08');
    cy.get('#sp_amount').click();

    cy.get('#sp_desctription').type('Czesne');
    cy.get('#pay_saved_payees').click();
  })})
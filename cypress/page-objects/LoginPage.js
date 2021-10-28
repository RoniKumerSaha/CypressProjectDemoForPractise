/// <reference types="cypress" />
import { BasePage } from "../support/ImportHelper";

export default class LoginPage extends BasePage {
  constructor() {
    super();
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.logedInUserName = "#nameofuser";
  }

  login(email, password) {
    cy.get(this.username).type(email);
    cy.get(this.password).type(password);
    cy.get(this.loginButton).click();
  }

  verifyLogin(username){
    cy.get(this.logedInUserName).should('contain.text', username)
  }
}

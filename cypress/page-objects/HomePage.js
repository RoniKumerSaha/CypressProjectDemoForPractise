/// <reference types="cypress" />
import { BasePage } from "../support/ImportHelper";

export default class HomePage extends BasePage {

    selectProduct(type, name){
        cy.contains('a', type).click();
        cy.contains('a', name).click();
    }
}
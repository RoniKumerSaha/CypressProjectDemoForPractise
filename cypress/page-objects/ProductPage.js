/// <reference types="cypress" />
import { BasePage } from "../support/ImportHelper";

export default class ProductPage extends BasePage{
    constructor(){
        super();
        this.productName = "h2";
    }

    verifyProduct(name){
        cy.get(this.productName).should("contain.text", name)
    }
}
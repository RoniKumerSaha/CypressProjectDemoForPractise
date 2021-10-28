/// <reference types="cypress" />

export default class NavBar {
    navigateTo(option) {
        cy.contains("a", option).click();
    }
    goToBasePage() {
        cy.visit("/");
    }
}
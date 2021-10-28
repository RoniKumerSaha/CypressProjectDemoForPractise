/// <reference types="cypress" />
export default class BasePage{

    verifyPage(pageTitle) {
        cy.title().should('include.text', pageTitle);
    }

    verifyAlertText(text){
        cy.on('window:alert', (msg) => {
            expect(msg).to.contains(text)
        })
    }

}
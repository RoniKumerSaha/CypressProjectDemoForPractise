/// <reference types= "cypress" />
import * as helper from "../support/ImportHelper";
import * as credentials from "../fixtures/credentials.json";
import * as navigation from "../fixtures/navigation.json"

const loginPage = new helper.LoginPage();
const navbar = new helper.NavBar();

beforeEach(()=>{
   navbar.goToBasePage();
   navbar.navigateTo(navigation.LogIn);
})

describe("Login Tests", () => {
    it("User can Login with valid credentials", () => {
        loginPage.login(credentials.valid_username, credentials.valid_password);
        loginPage.verifyLogin(credentials.valid_username);
    });
    it("User can not Login without valid credentials", () => {
        loginPage.login(credentials.valid_username, credentials.invalid_password);
        loginPage.verifyAlertText("Wrong password.");
    });
});
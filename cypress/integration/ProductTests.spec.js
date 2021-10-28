/// <reference types= "cypress" />
import * as helper from "../support/ImportHelper";
import * as product from "../fixtures/productData.json";

const navbar = new helper.NavBar();
const homePage = new helper.HomePage();
const productPage = new helper.ProductPage();

beforeEach(() => {
    navbar.goToBasePage();
})

describe("Login Tests", () => {
    it("User can select a product", () => {
     homePage.selectProduct(product.type.Laptop, product.name.MacBook_Pro);
     productPage.verifyProduct(product.name.MacBook_Pro);
    });
});
const { _, $ } = Cypress;

class homePage {
  constructor() {}

  naviagte_to_url(url, header_text) {
    /*
      this function will navigate user to "https://demoblaze.com "
      and verify user is land on the demoblaze.com website
      and verify page is loadded 
    */
    const product_store_text = "#nava";
    cy.visit(url);
    cy.url().should("contain", url);
    expect(cy.get(product_store_text).should("contain", header_text));
  }

  click_button_from_main_page(button_text) {
    /*
        this function will 
        verify home page has button
        verify button is active
        click on button from home page
     */
    const topLink = "//a[contains(text(),'" + button_text + "')]";
    cy.wait(2000);
    cy.xpath(topLink).then((textIs) => {
      expect(textIs.text()).contain(button_text);
      expect(cy.xpath(topLink).should("not.be.disabled"));
      cy.xpath(topLink).click({force: true});
    });
  }
  verify_welcome_text(button_text) {
    const welcome_text = "//a[contains(text(),'" + button_text + "')]";
    cy.xpath(welcome_text).then((textIs) => {
      expect(textIs.text()).contain(button_text);
    });
  }
}
exports.homePage = homePage;

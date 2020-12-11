const { _, $ } = Cypress;

class phoneCategoryPage {
  constructor() {}

  select_item(device_name) {
     /*
      this function will click on Samsung galaxy s6 
      from phone category"
    */
    const device_text = "//a[contains(text(),'" + device_name + "')]";
    cy.xpath(device_text).then((textIs) => {
      expect(textIs.text()).contain(device_name);
      cy.xpath(device_text).click() 
    });
  }
  verify_details_of_selected_item(phone_name){
    /*
      this function will
      verify that details of selected device
    */
    const image = ".product-image"
    const model_name = "//h2[contains(text(),'" + phone_name + "')]";
    const price = ".price-container"
    cy.get(image).should("exist")
    expect(cy.xpath(model_name).should("contain" , phone_name));
    cy.get(price).should("exist")

  }
  click_on_add_cart_button(button_text){
     /*
      this function will
      add item in to cart
    */
    const button = "//div/a[contains(text(),'" + button_text + "')]";
    expect(cy.xpath(button).should("not.be.disabled"));
    cy.xpath(button).contains(button_text).click({ force: true });
  }


}
exports.phoneCategoryPage = phoneCategoryPage;

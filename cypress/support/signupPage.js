const { _, $ } = Cypress;

class signupPage {
  constructor() {}

  addRendomString() {
    /*
      this function will 
      create 4 letter random string
     */
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const string_length = 4;
    let randomstring = "";
    for (let i = 0; i < string_length; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  

  verify_sign_up_dialog(dialog_header, username, password) {
    /*
      this function will
      verify sign up model is display
      verify sign up text is there
      add username and password 
     */
    const sign_up_text = "#signInModalLabel";
    const username_field = "#sign-username";
    const password_field = "#sign-password";
    
    expect(cy.get(sign_up_text).should("have.text", dialog_header));
    cy.wait(2000);
    cy.get(username_field)
      .type(username)
      .then(() => {
        cy.get(username_field);
      })
      .then((username_txt) => {
        let u_name = username_txt.text();
      });
    cy.wait(1000);
    cy.get(password_field).type(password);
  }


  click_on_dialog_button(button_text) {
    const button = "//button[contains(text(),'" + button_text + "')]";
    cy.xpath(button).contains(button_text).click({ force: true });
  }


  verify_alert_text(alert_text) {
    /*
      this function will validate text on alert
    */
    cy.on("window:alert", (txt) => {
      //Mocha assertions
      expect(txt).to.contains(alert_text);
    });
  }
}
exports.signupPage = signupPage;

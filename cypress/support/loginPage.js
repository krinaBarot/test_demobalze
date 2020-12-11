const {_, $ } = Cypress;

class loginPgae{
    constructor() {}


    verify_login_dialog(dialog_header, username, password) {
        /*
          this function will
          verify login model is display
          verify login text is there
          add username and password 
         */
        const login_text = "#logInModalLabel";
        const username_field = "#loginusername";
        const password_field = "#loginpassword";
        expect(cy.get(login_text).should("have.text", dialog_header));
        cy.wait(2000)
        cy.get(username_field)
          .type(username)
          .then(() => {
            cy.get(username_field);
          })
          .then((username_txt) => {
            let u_name = username_txt.text();
            cy.log(u_name);
          });
        cy.wait(1000);
        cy.get(password_field).type(password);
      }

}
exports.loginPgae = loginPgae;
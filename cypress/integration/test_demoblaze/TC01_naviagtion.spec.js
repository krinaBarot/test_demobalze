import { signupPage } from "../../support/signupPage.js";
import { loginPgae } from "../../support/loginPage.js";
import { homePage } from "../../support/homePage.js";
import { phoneCategoryPage } from "../../support/phoneCategoryPage.js";
import{ cartPage } from "../../support/cartPage"

describe("Verify selected item showing up in the cart", function () {
  let signup_page = new signupPage();
  let login_page = new loginPgae();
  let home_page = new homePage();
  let phoneCategory_page = new phoneCategoryPage();
  let cart_page = new cartPage()

  const username = signup_page.addRendomString();
  const login_username = username;
  const password = "Demo1234";

  beforeEach(function () {
    home_page.naviagte_to_url("https://demoblaze.com", "PRODUCT STORE");
  });


  it("Click on sign up button from the sign up dialog", function () {
    home_page.click_button_from_main_page("Sign up");
    signup_page.verify_sign_up_dialog("Sign up", username, password);
    signup_page.click_on_dialog_button("Sign up");
    signup_page.verify_alert_text("Sign up successful.");
    cy.wait(5000)
  });


  it("Login with correct username", function () {
    home_page.click_button_from_main_page("Log in");
    login_page.verify_login_dialog("Log in", login_username, password);
    signup_page.click_on_dialog_button("Log in");
    cy.wait(5000)
    home_page.verify_welcome_text("Welcome " + login_username);
  });


  it("Login with incorrect password and verify alert for worng password ",function(){
      home_page.click_button_from_main_page("Log in")
      login_page.verify_login_dialog("Log in" ,username ,"demoxyz")
      signup_page.click_on_dialog_button("Log in")
      signup_page.verify_alert_text("Wrong Password")

  })

  it("Login with username which does not exist and verify alert",function(){
      home_page.click_button_from_main_page("Sign up")
      signup_page.verify_sign_up_dialog("Sign up" ,"Demoxyz123" ,password)
      signup_page.click_on_dialog_button("Close")
      home_page.click_button_from_main_page("Log in")
      login_page.verify_login_dialog("Log in" ,"Demoxyz123",password)
      signup_page.click_on_dialog_button("Log in")
      signup_page.verify_alert_text("User does not exist.")
  })

  it("Select Samsung Galaxy S6 from phones category and add to the cart", function () {
    home_page.click_button_from_main_page("Phones")
    phoneCategory_page.select_item("Samsung galaxy s6")
    phoneCategory_page.verify_details_of_selected_item("Samsung galaxy s6")
    phoneCategory_page.click_on_add_cart_button("Add to cart");
    signup_page.verify_alert_text("Product added")
    cy.wait(5000)
    home_page.click_button_from_main_page("Cart")
    cart_page.verify_header("Products")
    cart_page.verify_added_device_details("Samsung galaxy s6")
  });
  
});

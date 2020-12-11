const {_, $} = Cypress
class cartPage{
    constructor(){}

    verify_header(header_text){
    /*
        this function will 
        verify Header on cart page
     */
        const header  = "//h2[contains(text(),'" + header_text + "')]";
         expect(cy.xpath(header).should("contain" ,header_text));
    }

    verify_added_device_details(device_name){
        /*
        verify there is only one item in the card
        verify that you have the correct device model
        */

        let values = []
        const product_table = ".table-responsive"
        const item_list = "#tbodyid > tr"
        cy.get(item_list) 
        .should('have.length', 1)
        cy.get(item_list)
        .find('td').each(($el ) => {
            cy.wrap($el)
            .invoke('text')
            .then(text => {
        if (text.includes(device_name)) 
            values.push(text.trim())
        })
    })
    .then(() => expect(values).to.deep.eq([device_name]))
    
     
                
    }

  
    


}
exports.cartPage = cartPage
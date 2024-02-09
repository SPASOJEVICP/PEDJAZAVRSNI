/// <reference types="Cypress" />

describe("NewBoard", () => {
    it("Succesfully create new board", () => {
        cy.visit("https://app.vivifyscrum.com/my-organizations");
        cy.url().should("contain" , "/New Board");
        cy.get("h2").should("have.text", "New Board");
        cy.get("input").should("have.text", "Organization");
        cy.get("div").should("have.text", "Board Title");
        cy.get("button").contains("Next").click();
        cy.get("h2").should("have.text", "Board Type");
        cy.get("div").should("have.text", "Scrum")
        cy.get("button").contains("Next").click();
        cy.get("h2").should("have.text", "Board Logo");
        cy.get("button").contains("Next").click();
        cy.get("div").should("have.text", "Rad");
        cy.get("button").contains("Finish").click();

    });
});









        
       
        
        
       

        

       
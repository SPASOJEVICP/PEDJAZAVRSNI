

describe("Login functionality - VivifyScrum", ()=>{

    it("Unsuccessfull login - wrong email" , ()=>{

        cy.visit("/login");
        cy.url().should('contain', '/login');
        cy.get('h1').should('have.text' , 'Log in with your existing account');
        cy.get('input').should('have.text', 'Email');
        cy.get('input').should('have.text', 'Password');
        cy.get("button").should('have.text', "Login");

        cy.get("type").type("email");
        should('be.empty');
        type("spasojevic1234@gmail.com");
        cy.get("#password").type("pedja1234");
        cy.get("button").click();

        cy.get('p').contains('Bad Credentials').should('be.visible').and('contain','Bad Credentials');
        cy.url().should('contain', '/login');

    });

    it("Unsuccessfull login - empty password" , ()=>{
        cy.visit("/login");
        cy.get("#email").should('be.empty').type("spasojevic1234@gmail.com");
        cy.get("#password").type(" ");
        cy.get("button").click();
    });

    it("Successfull login" , ()=>{
        cy.visit("/login");
        cy.get('h1').should('have.text' , 'Please login');
        cy.get('input').should('have.text', 'Email');
        cy.get('input').should('have.text', 'Password');
        cy.get("#email").type("spasojevic123@gmail.com").should("have.value" , "spasojevic123@gmail.com");
        cy.get("#password").type("spasojevic1234");
        cy.get("button").click();
        cy.get("a").contains('Logout').click();
        cy.url().should('not.contain', '/login');

    });
});
      
       



   
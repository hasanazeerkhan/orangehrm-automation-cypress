import {login, forgotPassword, leftPane, credentials, maintenance} from '../fixtures/testData.js'

describe('Login page tests', function(){
    beforeEach(function(){
        cy.visit('/')
    })
    it('Website title', function(){
        cy.title().should('eq', login.pageTitle);
    })
    it('Login - correct credentials', function(){
        cy.get(login.userName).type(credentials.userName);
        cy.get(login.password).type(credentials.password);
        cy.get(login.loginButton).click();
        cy.url().should('eq', login.landingUrl);
        cy.get(login.accountName).should('have.text', credentials.accountName);
        
    })
    it('Login - incorrect credentials', function(){
        cy.get(login.userName).type(credentials.userName);
        cy.get(login.password).type("bad password");
        cy.get(login.loginButton).click();
        cy.get(login.errorIcon).should('exist');
        cy.get(login.errorMessageElement).should('have.text',login.errorMessage);
        cy.url().should('eq',login.pageUrl);
    })
    it('Forgot password', function(){
        cy.get(login.forgotPassword).click();
        cy.url().should('eq', forgotPassword.url);
        cy.get(forgotPassword.cancel).click();
        cy.url().should('eq', login.pageUrl);
        cy.get(login.forgotPassword).click();
        cy.get(forgotPassword.resetPassword).click();
        cy.get(forgotPassword.error).should('have.text', forgotPassword.errorMessage);
        cy.get(forgotPassword.userName).type(credentials.userName);
        cy.get(forgotPassword.resetPassword).click();
        cy.get(forgotPassword.success).should('have.text', forgotPassword.successMessage);
        cy.url().should('eq', forgotPassword.urlAfterReset);
    })
})

describe('Landing page tests', function(){
        beforeEach(function(){
        cy.visit('/')
        cy.get(login.userName).type(credentials.userName);
        cy.get(login.password).type(credentials.password);
        cy.get(login.loginButton).click();
    })
    it('URL of all the left pane actions', function(){
        Object.keys(leftPane.name).forEach(key=>{
            var i = `${leftPane.name[key]}`;
            var j = `${leftPane.url[key]}`;
            cy.get(leftPane.element).contains(i).click();
            cy.url().should('eq', j);
            if (j == leftPane.url.maintenance){
                cy.get(maintenance.cancel).click();
            }
        })

    })
    // it('Search functionality in left pane', function(){

    // })
})
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
        cy.get(leftPane.element).contains(leftPane.name.admin).click();
        cy.url().should('eq', leftPane.url.admin);
        
        cy.get(leftPane.element).contains(leftPane.name.pim).click();
        cy.url().should('eq', leftPane.url.pim);

        cy.get(leftPane.element).contains(leftPane.name.leave).click();
        cy.url().should('eq', leftPane.url.leave);

        cy.get(leftPane.element).contains(leftPane.name.time).click();
        cy.url().should('eq', leftPane.url.time);

        cy.get(leftPane.element).contains(leftPane.name.recruitment).click();
        cy.url().should('eq', leftPane.url.recruitment);

        cy.get(leftPane.element).contains(leftPane.name.info).click();
        cy.url().should('eq', leftPane.url.info);

        cy.get(leftPane.element).contains(leftPane.name.performance).click();
        cy.url().should('eq', leftPane.url.performance);

        cy.get(leftPane.element).contains(leftPane.name.dashboard).click();
        cy.url().should('eq', leftPane.url.dashboard);

        cy.get(leftPane.element).contains(leftPane.name.directory).click();
        cy.url().should('eq', leftPane.url.directory);

        cy.get(leftPane.element).contains(leftPane.name.maintenance).click();
        cy.url().should('eq', leftPane.url.maintenance);
        cy.get(maintenance.cancel).click();

        cy.get(leftPane.element).contains(leftPane.name.claim).click();
        cy.url().should('eq', leftPane.url.claim);

        cy.get(leftPane.element).contains(leftPane.name.buzz).click();
        cy.url().should('eq', leftPane.url.buzz);

    })
    it('Search functionality in left pane', function(){

    })
})
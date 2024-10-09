const login = {
    userName:'[name="username"]',
    password:'[name="password"]',
    loginButton: '[type="submit"]',
    pageTitle: 'OrangeHRM',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    accountName: '[class="oxd-userdropdown-name"]',
    errorIcon: '[class="oxd-icon bi-exclamation-circle oxd-alert-content-icon"]',
    errorMessageElement: '[class="oxd-text oxd-text--p oxd-alert-content-text"]',
    errorMessage:'Invalid credentials'
}

const credentials = {
    userName:'Admin',
    password: 'admin123',
    accountName: 'Sushil Patil'
}

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
        cy.url().should('eq', login.url);
        cy.get(login.accountName).should('have.text', credentials.accountName);
        
    })
    it('Login - incorrect credentials', function(){
        cy.get(login.userName).type(credentials.userName);
        cy.get(login.password).type("bad password");
        cy.get(login.loginButton).click();
        cy.get(login.errorIcon).should('exist');
        cy.get(login.errorMessageElement).should('have.text',login.errorMessage);
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })
    // it('Forgot password functionality', function(){
        
    // })
    // it('Social handles links', function(){

    // })
    // it('Other website links', function(){

    // })
})
const login = {
    pageUrl:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    userName:'[name="username"]',
    password:'[name="password"]',
    loginButton: '[type="submit"]',
    pageTitle: 'OrangeHRM',
    landingUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    accountName: '[class="oxd-userdropdown-name"]',
    errorIcon: '[class="oxd-icon bi-exclamation-circle oxd-alert-content-icon"]',
    errorMessageElement: '[class="oxd-text oxd-text--p oxd-alert-content-text"]',
    errorMessage:'Invalid credentials',
    forgotPassword: '[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
}

const forgotPassword = {
    userName:'[name="username"]',
    cancel:'[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]',
    resetPassword: '[type="submit"]',
    error:'[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]',
    errorMessage:'Required',
    success: '[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]',
    successMessage:'Reset Password link sent successfully',
    url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode',
    urlAfterReset:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'
}

const credentials = {
    userName:'Admin',
    password: 'admin123',
    accountName: 'Atharva  More'
}

const leftPane = {
    element:'[class="oxd-text oxd-text--span oxd-main-menu-item--name"]',
    name:{
    admin: 'Admin',
    pim:'PIM',
    leave:'Leave',
    time:'Time',
    recruitment:'Recruitment',
    info: 'My Info',
    performance:'Performance',
    dashboard:'Dashboard',
    directory: 'Directory',
    maintenance:'Maintenance',
    claim: 'Claim',
    buzz:'Buzz',
    },
    url: {
        admin: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
        pim:'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        leave:'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList',
        time:'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet',
        recruitment:'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates',
        info: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7',
        performance:'https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview',
        dashboard:'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
        directory: 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory',
        maintenance:'https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee',
        claim: 'https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim',
        buzz:'https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz'
    }

}

const maintenance = {
    cancel: '[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-admin-access-button"]'
}

// describe('Login page tests', function(){
//     beforeEach(function(){
//         cy.visit('/')
//     })
//     it('Website title', function(){
//         cy.title().should('eq', login.pageTitle);
//     })
//     it('Login - correct credentials', function(){
//         cy.get(login.userName).type(credentials.userName);
//         cy.get(login.password).type(credentials.password);
//         cy.get(login.loginButton).click();
//         cy.url().should('eq', login.landingUrl);
//         cy.get(login.accountName).should('have.text', credentials.accountName);
        
//     })
//     it('Login - incorrect credentials', function(){
//         cy.get(login.userName).type(credentials.userName);
//         cy.get(login.password).type("bad password");
//         cy.get(login.loginButton).click();
//         cy.get(login.errorIcon).should('exist');
//         cy.get(login.errorMessageElement).should('have.text',login.errorMessage);
//         cy.url().should('eq',login.pageUrl);
//     })
//     it('Forgot password', function(){
//         cy.get(login.forgotPassword).click();
//         cy.url().should('eq', forgotPassword.url);
//         cy.get(forgotPassword.cancel).click();
//         cy.url().should('eq', login.pageUrl);
//         cy.get(login.forgotPassword).click();
//         cy.get(forgotPassword.resetPassword).click();
//         cy.get(forgotPassword.error).should('have.text', forgotPassword.errorMessage);
//         cy.get(forgotPassword.userName).type(credentials.userName);
//         cy.get(forgotPassword.resetPassword).click();
//         cy.get(forgotPassword.success).should('have.text', forgotPassword.successMessage);
//         cy.url().should('eq', forgotPassword.urlAfterReset);
//     })
// })

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
})
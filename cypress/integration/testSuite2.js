describe('project 2', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('check the login page functionality-positive', () => {
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
    })

    it('check the login page functionality-negative', () => {
        cy.get('[id="user-name"]').type('standard_us')
        cy.get('[id="password"]').type('secret_sce')
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should("contain",'Epic sadface: Username and password do not match any user in this service')
    })

    it('check the login page functionality-negative', () => {
        cy.get('[id="password"]').type("secret_sauce")
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should("contain",'Epic sadface: Username is required')
    })

    it('check the login page functionality-negative', () => {
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="error"]').should("contain",'Epic sadface: Password is required')
    })

    it('check the product classification functionality', () => {
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        cy.get('[class="product_sort_container"] option').contains('Price (high to low)')
    })
})
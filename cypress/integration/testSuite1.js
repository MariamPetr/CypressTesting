    describe('My First Test', () => {
            beforeEach(() => {cy.visit('https://www.seleniumeasy.com')
            })

        it('verify title of the page', () => {
             cy.visit('https://www.seleniumeasy.com')
               cy.title().should('eq', 'Learn Selenium with Best Practices and Examples | Selenium Easy')
             })

            it('check if TestNG button in enabled', () => {
                cy.visit('https://www.seleniumeasy.com')
                cy.get('[href="/testng-tutorials"]').contains('TestNG').click()
            })


            it('check if jenkins button in enabled', () => {
                cy.visit('https://www.seleniumeasy.com')
                cy.get('[href="/jenkins-tutorials"]').contains('Jenkins').click()
             })

            it('check if read more button in enabled', () => {
                cy.get('[href="/jenkins-tutorials"]').contains('Jenkins').click()
                cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0)
                cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0).click()
             })

        it('check if read more button in enabled', () => {
            cy.get('[href="/jenkins-tutorials"]').contains('Jenkins').click()
            cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0)
            cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0).click()
        })


            it('veriy the opportunity of writing comment', () => {
                cy.get('[href="/jenkins-tutorials"]').contains('Jenkins').click()
                cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0)
                cy.get('[href="/jenkins-tutorials/configure-maven-github-jenkins-to-run-testng-xml"]').eq(0).click()
                cy.get('[class="active"]').eq(0).click()
                cy.get('[id="edit-name"]').type('Karo')
                })

        it('check the subscribtion in footer', () => {
                cy.get('[class="email form-control"]').type('mariampetrosyanhakobovna@mail.ru')
            })

        it('check if dropdown is enable', () => {
            cy.get('[class="dropdown-toggle active"]').eq(1).click()
        })

        })
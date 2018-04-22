describe('My First Test', function () {
    it('Visit the home ', function () {
        cy.visit('/')
        cy.title().should('include', 'Groupe Agrica')

    })


    context('On home', function () {
        beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('/')
        })


        describe('Click Menu', function () {
            const checkPageLabel = (pagelabel) => {
                cy.get('.breadcrumb').children('.active').should('contain', pagelabel)
                let title = pagelabel.endsWith('s') ? pagelabel.slice(0, pagelabel.length - 1) : pagelabel;
                cy.title().should('include', title)
            }

            it('Salaries ', function () {
                cy.get('#block-system-main-menu > .menu > .first').click()
                cy.url().should('include', '/salaries')
                checkPageLabel('Salariés')
            })

            it('Retraite ', function () {
                cy.get('.menu-retraite').click()
                cy.url().should('include', '/retraite')
                checkPageLabel('Retraités')
            })


            it('Entreprises ', function () {
                cy.get('.menu-entreprise').click()
                cy.url().should('include', '/entreprise')
                checkPageLabel('Entreprises')
            })

            it('Groupe AGRICA', function () {
                cy.get('#block-system-main-menu > .menu > .last').click()
                cy.url().should('include', '/groupe')
                checkPageLabel('Groupe AGRICA')
            })
        })


        describe('Click Article', function () {
            it('First Article', function () {
                //cy.get('#content-wrapper').first().get('.block-content > a').click()
            })
        })

    })

})
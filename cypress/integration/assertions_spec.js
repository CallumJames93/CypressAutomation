

context('Assertion Tests', () =>{
	beforeEach(() =>{
		cy.visit('https://example.cypress.io/commands/assertions')
	})

	describe('Implicit Assertions', () =>{
		it('Ensure the last row of the table has class of success', () =>{

            //Assert the table contains the class succes on load
			cy.get('.assertion-table')
			  .find('tbody tr:last')
			  .should('have.class', 'success')
			  .find('td')
			  .first()

		})

		it('finds element by class name regex', () => {
			cy.get('.docs-header')
			  .find('div')
			  .should(($div) =>{
			  	expect($div).to.have.length(1)

			  	const className = $div[0].className

			  	expect(className).to.match(/heading-/)

			  })

			  .then(($div) =>{
			  	expect($div, 'text content').to.have.text('Introduction')
			  })
		})
	})
})
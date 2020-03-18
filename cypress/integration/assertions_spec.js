

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

		//To be continued.
	})
})
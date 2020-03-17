

//Give context of the test
context('Aliasing', () =>{

	beforeEach(() =>{
		cy.visit('https://example.cypress.io/commands/aliasing')
	})

	it('.as() - alias a DOM element for later use', () =>{

	    //Alias an element to reference in future is the @
		cy.get('.as-table').find('tbody>tr')
		  .first().find('td').first()
		  .find('button').as('firstBtn')

        //Perform action on the new alias element
		cy.get('@firstBtn').click();

		//Assert appropriate action took place
		cy.get('@firstBtn')
		  .should('have.class', 'btn-success')
		  .and('contain', 'Changed')
	})

	it('.as() - alias a route for later use', () =>{

		cy.server()
		cy.route('GET', 'comments/*').as('getComment')

		cy.get('.network-btn').click()

		cy.wait('@getComment').its('status').should('eq',200)
	})

})
context('Connectors', () =>{
	beforeEach(() =>{
		cy.visit('https://example.cypress.io/commands/connectors')
	})

	it('Iterate over an array of elements', () =>{
		// Get each list item
		cy.get('.connectors-each-ul>li')
		//Build up list
		  .each(($el, index, $list) => {
		  	//Output your findings
		  	console.log($el, index, $list)
		  	//Ensure the list count is the correct length
		    expect($list, '3 items').to.have.length(3)
		  })
	})
})
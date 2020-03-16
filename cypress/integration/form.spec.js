
// Initial Page load tests 
describe("When page is initially opened", () =>{

	it("should focus on the input field", () =>{

		cy.visit("/");
		cy.get("form");

		cy.focused().should("have.id", "name");
	});

	it("the input fields should be blank", ()=>{

		cy.visit("/");
		cy.get("form");

		cy.get('input[name="name"]')
		.should("have.value", "");

		cy.get('input[name="email"]')
		.should("have.value", "");

		cy.get('textarea')
		.should("have.value", "");

	});

});

// Delcare the test
describe("Form test", () => {

	//Ensure we can navigate to the form.
	it("Can fill the form", () => {
		cy.visit("/");
		cy.get("form");

		//Start filling in the form fields
		cy.get('input[name="name"]')
		.type("Callum")
		.should("have.value", "Callum"); // The should is an assertion to check the data value

		cy.get('input[name="email"]')
		.type("Callum@dev.dev")
		.should("have.value", "Callum@dev.dev");

		cy.get('textarea')
		.type("Mind if I ask some silly questions?")
		.should("have.value", "Mind if I ask some silly questions?");  

		cy.get("form").submit();

	});

	it("Can fill in the form slowly", () =>{

		cy.visit("/");
		cy.get("form");

		//Start filling in the form fields
		cy.get('input[name="name"]')
		.type("Callum", { delay: 100 })
		.should("have.value", "Callum"); 

	});

	it("Can type with key modifiers", () =>{

		cy.visit("/");
		cy.get("form");

		//Get the form fields
		cy.get("input[name='name']")
		// .type() with key modifiers
        .type("{alt}{option}") //these are equivalent
        .type("{ctrl}{control}") //these are equivalent
        .type("{meta}{command}{cmd}") //these are equivalent
        .type("{shift}")

        .should('have.value', '')

	});

	it("Can clear text from the input fields", () =>{

		cy.visit("/");
		cy.get("form");

		//Get the form fields
		cy.get("input[name='name']")
		// .type() with text and then call clear to remove the text
        .type("Callum")
        .clear()
        .should('have.value', '')

	});

});


// Basic stubbing XHR requests with Cypress
describe("Form API Response Test", () => {

	//Ensure we can navigate to the form.
	it("Can fill the form", () => {
		cy.visit("/");
		cy.get("form");

		//Start filling in the form fields
		//Start filling in the form fields
		cy.get('input[name="name"]')
		.type("Callum")
		.should("have.value", "Callum"); // The should is an assertion to check the data value

		cy.get('input[name="email"]')
		.type("Callum@dev.dev")
		.should("have.value", "Callum@dev.dev");

		cy.get('textarea')
		.type("Mind if I ask some silly questions?")
		.should("have.value", "Mind if I ask some silly questions?");  

		cy.server();
		cy.route({
			url: "/users/**",
			method: "POST",
			response: { status: "Saved", code: 201}
		});

		cy.get("form").submit();

		cy.contains("Saved")

	});

});
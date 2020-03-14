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

});


// Basic stubbing XHR requests with Cypress
describe("Form  API AJAX test", () => {

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
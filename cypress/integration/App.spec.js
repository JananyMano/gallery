/* eslint-disable no-undef */

describe("Gallery test", () => {
  it("See the search bar", () => {
    cy.visit("/");
    
    // Type "flowers" in the searchbar
    cy.get('input').type("flowers").should("have.value", "flowers");
    // Then submit
    cy.get('form').submit();
    cy.get('input').clear();

    // Type "castle" in the searchbar
    cy.get('input').type("castle").should("have.value", "castle");
    // Then submit
    cy.get('form').submit();
    cy.get('input').clear();

    // Type "unicorn" in the searchbar
    cy.get('input').type("unicorn").should("have.value", "unicorn");
    // Then submit
    cy.get('form').submit();

  });
});

describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  it("Should contain 0", () => {
    cy.get(".zero").contains("0");
  });
});
describe("Addition operator", () => {
  it("Should equal 10", () => {
    cy.get(".five").click();
    cy.get(".add").click();
    cy.get(".five").click();
    cy.get(".equals").click();
    cy.get(".screen").contains("10");
  });
});
describe("Multiplication operator", () => {
  it("Should equal 6", () => {
    cy.get(".two").click();
    cy.get(".multiply").click();
    cy.get(".three").click();
    cy.get(".equals").click();
    cy.get(".screen").contains("6");
  });
});
describe("Division operator", () => {
  it("Should equal 3", () => {
    cy.get(".six").click();
    cy.get(".divide").click();
    cy.get(".two").click();
    cy.get(".equals").click();
    cy.get(".screen").contains("3");
  });
});
describe("Substraction operator", () => {
  it("Should equal 4", () => {
    cy.get(".nine").click();
    cy.get(".subtract").click();
    cy.get(".five").click();
    cy.get(".equals").click();
    cy.get(".screen").contains("4");
  });
});
// describe("Clear operator", () => {
//   it("Should clear input", () => {
//     cy.get(".screen").type("");
//   });
// });

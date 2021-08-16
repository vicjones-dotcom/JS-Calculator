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
describe("Clear operator", () => {
  it("Clears all numbers", () => {
    cy.get(".two").click();
    cy.get(".three").click();
    cy.get(".five").click();
    cy.get(".clear").click();
    cy.get(".screen").should("not.contain", "Text");
  });
});
describe("Delete operator", () => {
  it("Should remove the last digit and equal 2", () => {
    cy.get(".two").click();
    cy.get(".zero").click();
    cy.get(".delete").click();
    cy.get(".screen").contains("2");
  });
});
describe("Decimal operator", () => {
  it("Should equal 5.3", () => {
    cy.get(".five").click();
    cy.get(".decimal").click();
    cy.get(".three").click();
    cy.get(".screen").contains("5.3");
  });
});
describe("Decimal addition", () => {
  it("Should equal 3.8", () => {
    cy.get(".clear").click();
    cy.get(".one").click();
    cy.get(".decimal").click();
    cy.get(".five").click();
    cy.get(".add").click();
    cy.get(".two").click();
    cy.get(".decimal").click();
    cy.get(".three").click();
    cy.get(".equals").click();
    cy.get(".screen").contains("3.8");
  });
});

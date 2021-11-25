describe("HomePage", () => {
  before(() => {
    cy.visit("/");
  });

  it("should open a modal after click on dog name button", () => {
    cy.get("ul").children().first().click();
    cy.get('div[role="dialog"]');
  });

  it("should display a dog image", () => {
    cy.get("img").should("have.attr", "src").should("include", "http");
  });

  it("should display random picture after clicking on a refresh button", () => {
    cy.get('button[aria-label="refresh image button"]').click();
    cy.get("img").should("have.attr", "src").should("include", "http");
  });

  it("should close a modal", () => {
    cy.get(`button[aria-label="close button"]`).click();
    cy.get('div[role="dialog"]').should("not.exist");
  });
});

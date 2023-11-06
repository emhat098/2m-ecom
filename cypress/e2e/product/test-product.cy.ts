describe("Product list spec", () => {
  it("Product is loaded in home page", () => {
    cy.visit("http://localhost:3000");
    cy.wait(5000);
    cy.get("div.product-list").first().click();
    cy.wait(1000);
    cy.get("h1").contains("Product page");
    expect(cy.get(".product").first()).is.not.null;
  });
});

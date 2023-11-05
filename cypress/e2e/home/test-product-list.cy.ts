describe("Product list spec", () => {
  it("Product is loaded in home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.product-list h2").each((item) => {
      expect(item.text()).is.not.null;
    });
  });
});

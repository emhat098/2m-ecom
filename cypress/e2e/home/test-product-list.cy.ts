describe("Product list spec", () => {
  it("Product is loaded in home page", () => {
    cy.visit("http://localhost:3000");
    cy.wait(5000);
    cy.get("div.product-list").each((item, index) => {
      const text = item.get(index).querySelector("h2")?.textContent;
      expect(text).is.not.null;
    });
  });
});

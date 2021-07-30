describe("Creating a message", () => {
  it("Displays the message in the list", () => {
    cy.visit("/");

    cy.get("[data-test='messageText']").type("New message");
    // cy.get("[data-test='sendButton']").click();
    // 下面这个是更好的实现
    cy.contains("send").click();
    cy.get("[data-test='messageText']").should("have.value", "");
    cy.contains("New message");
  });
});

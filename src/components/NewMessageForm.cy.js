import { mount } from "@cypress/vue";
import NewMessageForm from "./NewMessageForm.vue";

describe("NewMessageForm", () => {
  it("should clear message when click the send button", () => {
    mount(NewMessageForm);

    // 点击 send click
    // when
    cy.get("[data-test='messageText']").type("New message");
    cy.contains("send").click();
    cy.get("[data-test='messageText']").should("have.value", "");
  });

  it('emits the "send" event', () => {
    // 使用 jest 风格的匹配器 api
    expect(Cypress.vueWrapper.emitted("send")[0]).toEqual(["New message"]);
  });
});

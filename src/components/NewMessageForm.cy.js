import { mount } from "@cypress/vue";
import NewMessageForm from "./NewMessageForm.vue";

describe("NewMessageForm", () => {
  it("should clear message when click the send button", () => {
    mount(NewMessageForm);

    // 点击 send click
    // when
    // TODO
    // 1.看看有没有更好的获取元素的方式 ， data-test 不应该是优先级最高的
    // 	这个应该去看看 cypress 的匹配器的使用指导
    // 2. 看看如何在 cypress 中使用 jest 的匹配器
    //  chai 的匹配器 api 不是太熟悉
    cy.get("[data-test='messageText']").type("New message");
    cy.contains("send").click();
    cy.get("[data-test='messageText']").should("have.value", "");
  });

  it('emits the "send" event', () => {
    expect(Cypress.vueWrapper.emitted("send")[0]).to.deep.equal([
      "New message",
    ]);
  });
});

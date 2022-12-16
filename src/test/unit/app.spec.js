import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from "../../App.vue";

describe("App testing", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });
  it("should be mounted", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("one");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

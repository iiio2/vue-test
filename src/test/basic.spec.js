import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("testing the app", () => {
  it("should mount", async () => {
    expect(App).toBeTruthy();

    const wrapper = mount(App);

    expect(wrapper.text()).toContain("one");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

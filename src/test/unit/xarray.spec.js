import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XArray from "../../components/XArray.vue";

describe("xarray component testing", () => {
  it("should be truthy", () => {
    expect(XArray).toBeTruthy();
  });
  it("should expect props", () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render string in separate input", () => {
    const wrapper = mount(XArray, {
      data() {
        return {
          modelValue: ["one", "two"],
          internalValue: ["one", "two", ""],
        };
      },
    });
    const inputElements = wrapper.findAll("input");
    expect(inputElements.length).toBe(3);
  });
  it("should always render extra input element", () => {
    const wrapper = mount(XArray, {
      data() {
        return {
          modelValue: ["one", "two"],
          internalValue: ["one", "two", ""],
        };
      },
    });
    const inputs = wrapper.findAll("input");
    expect(inputs.length).toBeGreaterThan(0);
  });
  it("if value is empty the element is removed from array", () => {
    const wrapper = mount(XArray, {
      data() {
        return {
          modelValue: ["one", "two"],
          internalValue: ["one", "two", ""],
        };
      },
    });
    const input = wrapper.find("input");
    input.element.value = "three";
    input.trigger("input");
    expect(wrapper.vm.internalValue.length).toBe(3);
  });
});

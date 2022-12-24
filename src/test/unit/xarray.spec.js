import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XArray from "../../components/XArray.vue";

describe("testing XArray", () => {
  it("should accept array of string in v-model", () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });
    expect(wrapper.props().modelValue).toStrictEqual(["one", "two"]);
  });

  // ######

  it("should render each string as separate input", () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
      data() {
        return {
          internalValue: ["one", "two", ""],
        };
      },
    });

    const input = wrapper.findAll("input").at(0);
    expect(input.exists()).toBe(true);
  });

  // #####
  it("should be always one extra input shown, so that it is possible to add new values", () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
      data() {
        return {
          internalValue: ["one", "two", ""],
        };
      },
    });
    const inputLength = wrapper.findAll("input").length;
    const models = wrapper.props().modelValue.length;
    expect(inputLength).toBe(models + 1);
  });
});

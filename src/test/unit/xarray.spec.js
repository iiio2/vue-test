import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import XArray from "../../components/XArray.vue";

describe("XArray", () => {
  it("should accept array of string in v-model", () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });
    expect(wrapper.props().modelValue).toStrictEqual(["one", "two"]);
  });

  it("should render each string as separate input", async () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("input").length).toBe(3);
  });

  it("writes back to the array when input value is changed", async () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["a", "b", "c"],
      },
    });

    await wrapper.vm.$nextTick();

    const input = wrapper.findAll("input").at(1);
    input.setValue("new value");

    expect(input.element.value).toBe("new value");
  });

  it("removes input element from array when value is empty", async () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });

    await wrapper.vm.$nextTick();
    const input = await wrapper.findAll("input").at(0).setValue("");

    expect(input).toBe(undefined);
  });
  it("should be always one extra input shown, so that it is possible to add new values", async () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll("input").length).toBe(3);
  });
  it("example works as expected (compare the snapshot)", async () => {
    const wrapper = mount(XArray, {
      props: {
        modelValue: ["one", "two"],
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });
});

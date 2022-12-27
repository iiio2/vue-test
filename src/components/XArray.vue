<template>
  <div>
    <input
      v-for="(input, index) in internalValue"
      :key="index"
      v-model="internalValue[index]"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      internalValue: [],
    };
  },
  watch: {
    // when modelValue is changed
    modelValue: {
      handler(newVal) {
        // todo: fill internalValue from v-model and add an empty element
        this.internalValue = [...newVal, ""];
      },
      deep: true,
    },
    // when internalValue is changed
    internalValue: {
      handler(newVal) {
        // todo: form a result without empty elements
        // todo: emit input event with result
        const result = newVal.filter(Boolean);
        console.log(newVal);
        if (JSON.stringify(newVal) === JSON.stringify(this.modelValue))
          return null;
        console.log("update:modelValue", result);
        this.$emit("update:modelValue", result);
      },
      deep: true,
    },
  },
  // when component is mounted
  mounted() {
    // fill internalValue from v-model and add an empty element

    this.internalValue = [...this.modelValue, ""];
  },
};
</script>

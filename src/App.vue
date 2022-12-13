<template>
  <div>
    <XArray v-model="myArray" />
    <pre>{{ myArray }}</pre>
  </div>
</template>

<script>
import XArray from "./components/XArray.vue";

export default {
  components: {
    XArray,
  },
  data: () => {
    return {
      myArray: ["one", "two"],
      myResult1: `<div>
        <input value="one">
        <input value="two">
        <input value="">
      </div>`,
    };
  },
};
</script>

<template>
  <label
    for="mode"
    class="bg-red-300 h-20 absolute top-5 right-5"
    @click="switchMode()"
  >
    <input type="checkbox" v-model="modeActive" name="mode" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      modeActive: null
    };
  },
  methods: {
    switchMode() {
      this.modeActive ? (this.modeActive = false) : (this.modeActive = true);
      this.$emit("switch", this.modeActive);
    }
  },
  props: {
    darkMode: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.modeActive = this.darkMode;
  }
};
</script>
<style lang="postcss">
input[type="checkbox"] {
  @apply absolute top-0 right-0 border-2 bg-black rounded-full border-white h-10 w-16 outline-none cursor-pointer appearance-none z-10;
}
input[type="checkbox"]:before {
  content: "";
  @apply absolute bg-white h-5 w-5 rounded-full top-0 left-0 m-2 transition-all duration-500;
}
input[type="checkbox"]:checked {
  @apply bg-white;
}
input:checked[type="checkbox"]:before {
  @apply bg-black left-6;
}
</style>

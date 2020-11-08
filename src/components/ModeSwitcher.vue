<template>
  <button
    class="absolute min-w-48 p-5 right-0 top-0 focus:outline-none"
    :class="mode === 'dark' ? 'bg-white text-black' : 'bg-black text-white'"
    @click="switchMode()"
  >
    {{ modeLabel }}
  </button>
</template>

<script>
export default {
  computed: {
    modeLabel() {
      return "Make it " + this.modes.find(mode => mode !== this.mode) + "er!";
    }
  },
  data() {
    return {
      modes: ["dark", "light"]
    };
  },
  methods: {
    switchMode() {
      this.mode === "dark" ? (this.mode = "light") : (this.mode = "dark");
      this.$emit("switch", this.mode);
    }
  },
  props: {
    mode: String
  }
};
</script>

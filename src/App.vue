<template>
  <div :class="mode" id="app">
    <router-view :mode="mode" @switch="switchMode()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "dark"
    };
  },
  methods: {
    switchMode() {
      this.mode === "dark" ? (this.mode = "light") : (this.mode = "dark");
    }
  }
};
</script>

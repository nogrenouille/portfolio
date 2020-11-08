<template>
  <div
    class="grid place-items-center p-20 h-full"
    :class="mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'"
    id="app"
  >
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

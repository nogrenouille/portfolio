<template>
  <div
    class="grid place-items-center p-20 h-full"
    :class="mode === 'light' ? 'bg-white text-black' : 'bg-black text-white'"
    id="app"
  >
    <ModeSwitcher :mode="mode" @switch="setMode($event)" />
    <router-view />
  </div>
</template>

<script>
import ModeSwitcher from "@/components/ModeSwitcher.vue";
export default {
  components: { ModeSwitcher },
  data() {
    return {
      mode: "dark"
    };
  },
  methods: {
    setMode(newmode) {
      this.mode = newmode;
    }
  }
};
</script>

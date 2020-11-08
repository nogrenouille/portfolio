<template>
  <div
    class="grid place-items-center p-20 h-full"
    :class="darkMode ? 'bg-black text-white' : 'bg-white text-black'"
    id="app"
  >
    <ModeSwitcher
      :darkMode="darkMode"
      @switch="setMode($event)"
      v-if="darkMode != null"
    />
    <router-view />
  </div>
</template>

<script>
import ModeSwitcher from "@/components/ModeSwitcher.vue";
export default {
  components: { ModeSwitcher },
  data() {
    return {
      darkMode: null
    };
  },
  methods: {
    setMode(newmode) {
      this.darkMode = newmode;
      localStorage.setItem("darkMode", this.darkMode);
    }
  },
  mounted() {
    if (localStorage.getItem("darkMode")) {
      this.darkMode = JSON.parse(localStorage.getItem("darkMode"));
    } else {
      const currentDate = new Date();
      currentDate.getHours() > 18 || currentDate.getHours() < 7
        ? (this.darkMode = true)
        : (this.darkMode = false);

      localStorage.setItem("darkMode", this.darkMode);
    }
  }
};
</script>

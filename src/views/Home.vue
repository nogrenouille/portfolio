<template>
  <main>
    <ModeSwitcher :mode="mode" @click="$emit('switch')" />
    <h1 class="font-bold text-4xl lg:text-6xl">nogrenouille</h1>
    <p>
      En attendant l'ouverture prochaine de ce <strong>portfolio</strong>, venez
      donc me suivre sur
      <a href="https://instagram.com/nogrenouille">Instagram</a> &
      <a href="https://twitter.com/nogrenouille">Twitter</a> :)
    </p>
  </main>
</template>

<script>
import ModeSwitcher from "@/components/ModeSwitcher.vue";

export default {
  components: { ModeSwitcher },
  props: {
    mode: String
  }
};
</script>

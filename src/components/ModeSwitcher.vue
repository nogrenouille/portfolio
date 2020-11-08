<template>
  <button @click="$emit('click')">{{ mode }}</button>
</template>

<script>
export default {
  props: {
    mode: String
  }
};
</script>

<style lang="postcss" scoped>
button {
  min-width: 5rem;
  position: absolute;
  top: 0;
  right: 0;
}
</style>

<template>
  <section class="main-section">
    <exclusive/>
  </section>
</template>

<script>
  import exclusive from './exclusive.vue';

  export default {
    components: {
      exclusive
    }
  }
</script>

<style scoped>
  .main-section {
    width: 83.33%;
    margin: calc(100vw / 8.23) auto calc(100vw / 12) auto;
  }
</style>

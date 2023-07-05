<template>
  <section class="main-section">
    <banner/>
  </section>
</template>

<script>
  import banner from './banner.vue';

  export default {
    components: {
      banner, 
    }
  }
</script>

<style scoped>
  .main-section {
    display: flex;
    flex-direction: column;
    width: 72.22%;
    margin: calc(100vw / 31.30) auto calc(100vw / 42.38) auto;
  }
</style>
<template>
  <section class="main-section">
    <banner/>
    <content/>
  </section>
</template>

<script>
  import banner from './banner.vue';
  import content from "./content/content.vue";

  export default {
    components: {
      banner, content,
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
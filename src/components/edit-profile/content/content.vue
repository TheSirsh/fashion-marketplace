<template>
  <section class="content-container">
    <asde/>
    <feeds/>
  </section>
</template>

<script>
  import asde from './aside/aside.vue';
  import feeds from './feeds.vue';

  export default {
    components: {
      asde, feeds,
    }
  }
</script>

<style scoped>

.content-container {
  display: flex;
  justify-content: space-between;
  width: 72.29%;
  margin: calc(100vw / 8) auto calc(100vw / 11.08);
}
</style>
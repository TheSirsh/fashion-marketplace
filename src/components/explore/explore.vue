<template>
  <section class="main-section">
    <h2>Explore Collections</h2>
    <filtr/>
    <board/>
  </section>
</template>

<script>
  import filtr from "@/components/explore/filter.vue";
  import board from "@/components/explore/board.vue";

  export default {
    components: {
      filtr, board,
    }
  }
</script>

<style scoped>
  .main-section {
    width: 83.33%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
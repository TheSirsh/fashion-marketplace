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
    margin: calc(100vw / 7.87) auto calc(100vw / 11.08) auto;
  }

  h2 {
    margin: 0px;
    font-size: 3rem;
    font-weight: 800;
  }
</style>
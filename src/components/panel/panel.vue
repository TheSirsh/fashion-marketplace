<template>
  <section>
    <filtr/>
    <board/>
  </section>
</template>

<script>
  import filtr from "@/components/panel/filter.vue";
  import board from "@/components/panel/board.vue";

  export default {
    components: {
      filtr, board,
    }
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.20);
    height: calc(100vw / 0.76);
    margin: calc(100vw / 9.6) auto;
  }
</style>
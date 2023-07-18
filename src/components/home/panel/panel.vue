<template>
  <section>
    <filtr/>
    <board/>
  </section>
</template>

<script>
  import filtr from "@/components/home/panel/filter.vue";
  import board from "@/components/home/panel/board.vue";

  export default {
    components: {
      filtr, board,
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    height: calc(100vw / 0.76);
    margin: calc(100vw / 9.6) auto;
  }
</style>
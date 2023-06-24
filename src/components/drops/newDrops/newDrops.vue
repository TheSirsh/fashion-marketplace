<template>
  <section>
    <h2>New Drops</h2>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/drops/newDrops/board.vue";

  export default {
    components: {
      board,
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    margin: calc(100vw / 12) auto;
  }

  h2 {
    margin: 0px auto;
    font-size: 2rem;
    font-weight: 600;
  }
</style>
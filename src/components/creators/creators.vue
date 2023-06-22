<template>
  <section>
    <h2>Upcoming Creators</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/creators/board.vue";

  export default {
    components: {
      board,
    },
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.20);
    height: calc(100vw / 2.10);
    margin: calc(100vw / 12) auto;
  }

  h2 {
    margin: 0px auto;
    font-size: calc(100vw / 36);
    font-weight: bold;
  }

  p {
    margin: calc(100vw / 144) auto calc(100vw / 48) auto;
    width: calc(100vw / 3.4);
    font-size: calc(100vw / 72);
    font-weight: medium;
    opacity: 0.5;
  }
</style>
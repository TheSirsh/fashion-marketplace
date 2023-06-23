<template>
  <section>
    <h2>Upcoming Brands</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/home/brends2/board.vue";

  export default {
    components: {
      board,
    },
  }
</script>

<style scoped>
  section {
    height: calc(100vw / 2.10);
    margin: calc(100vw / 12) auto;
  }

  h2 {
    margin: 0px auto;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin: calc(100vw / 144) auto calc(100vw / 48) auto;
    width: calc(100vw / 3.4);
    font-weight: 500;
    opacity: 0.5;
  }
</style>
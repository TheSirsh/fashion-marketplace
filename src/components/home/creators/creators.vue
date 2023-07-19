<template>
  <section>
    <h2>Upcoming Creators</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/home/creators/board.vue";

  export default {
    components: {
      board,
    },
  }
</script>

<style scoped>
  section {
    width: 100%;
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
    width: 35.25%;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
  }
</style>
<template>
  <section>
    <h2>Freaquently Asked Question</h2>
    <p>Wanna Ask Something?</p>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/home/faq/board.vue";

  export default {
    components: {
      board,
    },
  }
</script>

<style scoped>
  section {
    height: calc(100vw / 2.98);
    margin: calc(100vw / 12) auto calc(100vw / 96) auto;
  }

  h2 {
    width: calc(100vw / 3.72);
    font-size: 2rem;
    font-weight: 700;
    margin: 0px auto;
  }

  p {
    width: calc(100vw / 5.98);
    margin: calc(100vw / 144) auto calc(100vw / 28.8) auto;
    font-weight: 500;
    opacity: 0.5;
  }
</style>
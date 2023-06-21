<template>
  <section>
    <h2>Freaquently Asked Question</h2>
    <p>Wanna Ask Something?</p>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/faq/board.vue"

  export default {
    components: {
      board,
    }
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.20);
    height: calc(100vw / 2.98);
    margin: calc(100vw / 12) auto calc(100vw / 96) auto;
  }

  h2 {
    width: calc(100vw / 3.72);
    font-size: calc(100vw / 36);
    font-weight: bold;
    margin: 0px auto;
  }

  p {
    width: calc(100vw / 5.98);
    margin: calc(100vw / 144) auto calc(100vw / 28.8) auto;
    font-weight: calc(100vw / 72);
    font-weight: medium;
    opacity: 0.5;
  }
</style>
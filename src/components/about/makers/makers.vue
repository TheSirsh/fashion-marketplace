<template>
  <section>
    <h2>Our Makers</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.</p>
    <board/>
  </section>
</template>

<script>
  import board from './board.vue';

  export default {
    components: {
      board,
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 86.73%;
    height: calc(100vw / 1.12);
    margin: calc(100vw / 9.6) auto calc(100vw / 8) auto;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px auto;
  }

  p {
    width: 60.91%;
    margin: calc(100vw / 72) auto calc(100vw / 24) auto;
    font-size: 1rem;
    font-weight: 500;
    line-height: 180%;
    opacity: 0.5;
  }
</style>
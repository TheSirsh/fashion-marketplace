<template>
  <section>
    <h2>New & Trending</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <items/>
  </section>
</template>

<script>
  import items from "@/components/home/trending/items.vue";

  export default {
    components: {
      items,
    },
  }
</script>

<style scoped>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vw / 1.91);
    margin: calc(100vw / 9.6) auto;
    font-family: "Poppins";
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin: calc(100vw / 144) auto calc(100vw / 48) auto;
    width: 33%;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
  }
</style>
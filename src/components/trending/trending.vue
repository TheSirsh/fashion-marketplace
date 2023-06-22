<template>
  <section>
    <h2>New & Trending</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <items/>
  </section>
</template>

<script>
  import items from "@/components/trending/items.vue";

  export default {
    components: {
      items,
    },
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100vw / 1.2);
    height: calc(100vw / 1.91);
    margin: calc(100vw / 9.6) auto;
    font-family: "Poppins";
  }

  h2 {
    margin: 0;
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
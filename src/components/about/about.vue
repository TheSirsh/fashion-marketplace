<template>
  <section>
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <content/>
  </section>
</template>

<script>
  import content from "@/components/about/content.vue";

  export default {
    components: {
      content,
    },
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.27);
    height: calc(100vw / 1.875);
    margin: calc(100vw / 14.12) auto;
  }

  h2 {
    font-family: Roboto;
    font-size: calc(100vw / 36);
    font-weight: bold;
    margin: 0px;
  }

  p {
    width: calc(100vw / 3.4);
    margin: calc(100vw / 144) auto;
    text-align: center;
    font-family: Poppins;
    font-size: calc(100vw / 72);
    color: #888888;
  }
</style>
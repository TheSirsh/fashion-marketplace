<template>
  <section>
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <content/>
  </section>
</template>

<script>
  import content from "@/components/home/about/content.vue";

  export default {
    components: {
      content,
    },
  }
</script>

<style scoped>
  section {
    width: 94.67%;
    height: calc(100vw / 1.875);
    margin: calc(100vw / 14.12) auto;
  }

  h2 {
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 700;
    margin: 0px;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    width: 35%;
    margin: calc(100vw / 144) auto;
    line-height: 1.5rem;
    text-align: center;
    font-family: Poppins;
    color: #888888;
  }
</style>
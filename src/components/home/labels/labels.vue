<template>
  <section>
    <h2>All Collection</h2>
    <p>Worlds First Layer 2 Fashion Marketplace</p>
    <marks/>
  </section>
</template>

<script>
import marks from "@/components/home/labels/marks.vue";

export default {
  components: {
    marks,
  }
}
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    margin: calc(100vw / 12) auto;
    width: 78.42%;
    height: calc(100vw / 4.74);
    padding-left: 8.33%;
  }

  h2 {
    font-family: 'Poppins';
    font-size: 2rem;
    font-weight: 700;
    margin: 0px;
  }

  p {
    font-size: 1rem;
    margin: calc(100vw / 144) auto;
    font-weight: 500;
    opacity: 0.5;
  }
</style>
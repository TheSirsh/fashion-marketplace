<template>
  <section>
    <h2>All Collection</h2>
    <p>Worlds First Layer 2 Fashion Marketplace</p>
    <marks/>
  </section>
</template>

<script>
import marks from "@/components/labels/marks.vue";

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
    width: calc(100vw / 1.53);
    height: calc(100vw / 4.74)
  }

  h2 {
    font-family: 'Poppins';
    font-size: calc(100vw / 36);
    font-weight: bold;
    margin: 0px;
  }

  p {
    font-size: calc(100vw / 72);
    margin: calc(100vw / 144) auto;
    font-weight: 500;
    opacity: 0.5;
  }
</style>
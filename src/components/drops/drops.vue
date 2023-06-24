<template>
  <section class="main-section">
    <exclusive/>
    <upcoming/>
  </section>
</template>

<script>
  import exclusive from "@/components/drops/exclusive.vue";
  import upcoming from "@/components/drops/upcoming/upcoming.vue";

  export default {
    components: {
      exclusive, upcoming, 
    }
  }
</script>

<style scoped>
  .main-section {
    width: 83.33%;
    margin: calc(100vw / 8.23) auto calc(100vw / 12) auto;
  }
</style>

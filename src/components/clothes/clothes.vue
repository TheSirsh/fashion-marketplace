<template>
  <section>
    <content/>
    <images/>
  </section>
</template>

<script>
  import content from "@/components/clothes/content.vue";
  import images from "@/components/clothes/images.vue";

  export default {
    components: {
      content, images,
    }
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.2);
    height: calc(100vw / 2.79);
    margin: calc(100vw / 80) auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
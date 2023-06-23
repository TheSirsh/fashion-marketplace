<template>
  <section>
    <content/>
    <images/>
  </section>
</template>

<script>
  import content from "@/components/home/clothes/content.vue";
  import images from "@/components/home/clothes/images.vue";

  export default {
    components: {
      content, images,
    },
  }
</script>

<style scoped>
  section {
    height: calc(100vw / 2.79);
    margin: calc(100vw / 80) auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
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
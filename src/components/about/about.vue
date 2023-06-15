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
    }
  }
</script>
<template>
  <section>
    <h2>New & Trending</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <items/>
  </section>
</template>

<script>
  import items from './items.vue';

  export default {
    components: {
      items,
    }
  }
</script>
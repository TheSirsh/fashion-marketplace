<template>
  <section>
    <asde/>
    <feeds/>
  </section>
</template>

<script>
  import asde from './aside/aside.vue';
  import feeds from './feeds.vue';

  export default {
    components: {
      asde, feeds,
    }
  }
</script>
<template>
  <section>
    <become/>
    <customize/>
  </section>
</template>

<script>
  import become from './become.vue';
  import customize from './customize.vue';

  export default {
    components: {
      become, customize,
    }
  }
</script>
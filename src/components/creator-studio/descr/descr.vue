<template>
  <section>
    <become/>
    <customize/>
    <explore/>
  </section>
</template>

<script>
  import become from './become.vue';
  import customize from './customize.vue';
  import explore from './explore.vue';

  export default {
    components: {
      become, customize, explore,
    }
  }
</script>
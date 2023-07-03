<template>
  <section>
    <become/>
    <customize/>
    <explore/>
    <create/>
  </section>
</template>

<script>
  import become from './become.vue';
  import customize from './customize.vue';
  import explore from './explore.vue';
  import create from './create.vue';

  export default {
    components: {
      become, customize, explore, create,
    }
  }
</script>
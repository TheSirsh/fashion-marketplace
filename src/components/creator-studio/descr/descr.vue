<template>
  <section class="main-container">
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

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 84%;
    height: calc(100vw / 0.58);
    margin: calc(100vw / 11.08) auto calc(100vw / 7.2) auto;
  }
</style>
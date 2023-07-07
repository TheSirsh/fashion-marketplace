<template>
  <aside>
    <photos/>
    <metaLook/>
    <groups/>
  </aside>
</template>

<script>
  import photos from './photos.vue';
  import metaLook from './meta.vue';
  import groups from './groups.vue';

  export default {
    components :{
      photos, metaLook, groups,
    }
  }
</script>

<style scoped>

  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 33.14%;
    margin: 0;
  }

</style>
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
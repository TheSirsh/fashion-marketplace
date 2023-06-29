<template>
  <aside>
    <input type="text" placeholder="Search Posts">
    <follow/>
    <group/>
  </aside>
</template>

<script>
  import follow from './follow.vue';
  import group from './group.vue';

  export default {
    components: {
      follow, group,
    }
  }
</script>
<template>
  <aside>
    <input type="text" placeholder="Search Posts">
    <follow/>
    <group/>
    <trending/>
  </aside>
</template>

<script>
  import follow from './follow.vue';
  import group from './group.vue';
  import trending from './trending.vue';

  export default {
    components: {
      follow, group, trending,
    }
  }
</script>
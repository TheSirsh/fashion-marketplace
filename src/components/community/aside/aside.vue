<template>
  <aside>
    <input type="text" placeholder="Search Posts">
    <follow/>
  </aside>
</template>

<script>
  import follow from './follow.vue';

  export default {
    components: {
      follow
    }
  }
</script>
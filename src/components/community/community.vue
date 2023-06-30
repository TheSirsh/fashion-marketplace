<template>
  <div class="community">
    <feeds/>
    <right/>
  </div>
</template>

<script>
  import feeds from './feeds/feeds.vue';
  import right from "@/components/community/aside/aside.vue"
  export default {
    components: {
      feeds, right,
    }
  }
</script>

<style scoped>
  .community {
    width: 87.5%;
    display: flex;
    justify-content: space-between;
    margin: calc(100vw / 18) calc(100vw / 24) calc(100vw / 12) calc(100vw / 12);
  }
</style>
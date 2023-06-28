<template>
  <div>
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
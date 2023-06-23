<template>
  <section class="main-section">
    <collection/>
    <clothes/>
    <brends/>
    <about/>
    <labels/>
    <panel/>
    <trending/>
    <creators/>
    <brends2/>
    <faq/>
    <start/>
  </section>
</template>

<script>
  import collection from '@/components/home/collection/collection.vue';
  import clothes from '@/components/home/clothes/clothes.vue';
  import brends from '@/components/home/brends/brends.vue';
  import about from '@/components/home/about/about.vue';
  import labels from "@/components/home/labels/labels.vue";
  import panel from "@/components/home/panel/panel.vue";
  import trending from "@/components/home/trending/trending.vue";
  import creators from "@/components/home/creators/creators.vue";
  import brends2 from "@/components/home/brends2/brends2.vue";
  import faq from "@/components/home/faq/faq.vue";
  import start from "@/components/home/start/start.vue";

  export default {
      components: {
        collection, clothes, brends, about, labels, panel, trending, creators, brends2, faq, start, 
      }
  }
</script>

<style scoped>
  .main-section {
    width: 83.33%;
    margin-left: auto;
    margin-right: auto;
  }
</style>

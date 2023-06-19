<template>
  <section>
    <filtr/>
    <board/>
  </section>
</template>

<script>
  import filtr from "@/components/panel/filter.vue";
  import board from "@/components/panel/board.vue";

  export default {
    components: {
      filtr, board,
    }
  }
</script>
<template>
  <section>
    <h2>Upcoming Drops</h2>
    <board/>
  </section>
</template>

<script>
  import board from "@/components/drops/upcoming/board.vue";

  export default {
    components: {
      board,
    }
  }
</script>
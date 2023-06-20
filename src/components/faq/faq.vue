<template>
  <section>
    <h2>Freaquently Asked Question</h2>
    <p>Wanna Ask Something?</p>
    <board/>

  </section>
</template>

<script>
  import board from "@/components/faq/board.vue"

  export default {
    components: {
      board,
    }
  }
</script>
<template>
  <section>
    <who/>
    <what/>
    <when/>
  </section>
</template>

<script>
  import who from './who.vue';
  import what from './what.vue';
  import when from './when.vue';

  export default {
    components: {
      who, what, when,
    },
  }
</script>


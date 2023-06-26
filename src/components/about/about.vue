<template>
  <section>
    <who/>
    <what/>
    <when/>
    <makers/>
  </section>
</template>

<script>
  import who from './who.vue';
  import what from './what.vue';
  import when from './when.vue';
  import makers from './makers/makers.vue';

  export default {
    components: {
      who, what, when, makers,
    },
  }
</script>


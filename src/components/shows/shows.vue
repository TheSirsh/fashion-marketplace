<template>
  <section>
    <div>
      <button>
        <span>Established Brands</span>
      </button>
      <button>
        <span>Creators Brands</span>
      </button>
    </div>
    <h2>Fashion Shows</h2>
    <live/>
    <upcomings/>
    <previous/>
  </section>
</template>

<script>
  import live from './live.vue';
  import upcomings from './upcomings.vue';
  import previous from './previous.vue';

  export default {
    components: {
      live, upcomings, previous,
    }
  }
</script>
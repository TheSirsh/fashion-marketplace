<template>
  <section class="main-container">
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

<style scoped>

  .main-container {
    width: 84.65%;
    display: flex;
    flex-direction: column;
    margin: calc(100vw / 24) auto calc(100vw / 9.6) auto;
  }

  .main-container > div {
    width: 52.42%;
    height: calc(100vw / 26.46);
    margin: 0px auto calc(100vw / 11.06) auto;
    display: flex;
    justify-content: space-between;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 4.8);
    height: 100%;
    border: none;
    border-radius: calc(100vw / 6.97);
    background-color: #493e52;
    color: #ffffff;
    font-size: 0.939rem;
    font-weight: 500;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px auto calc(100vw / 12) auto;
  }

</style>
<template>
  <section class="main-container">
    <div>
      <hr class="line1">
      <button>
        <span>Established Brands</span>
      </button>
      <button>
        <span>Creators Brands</span>
      </button>
      <hr class="line2">
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
    position: relative;
    width: 81.39%;
    height: calc(100vw / 26.46);
    margin: 0px auto calc(100vw / 11.06) auto;
    display: flex;
    justify-content: center;
  }

  .line1 {
    margin: 0px;
    position: absolute;
    top: 50%;
    width: 100%;
    border: none;
    border-top: 0.5px solid #ffffff;
    opacity: 0.2;
    z-index: -2;
  }
  
  .line2 {
    margin: 0px;
    position: absolute;
    height: 1px;
    top: 50%;
    left: 33.5%;
    width: 33%;
    border: none;
    border-top: 1px solid #6c5965;
    z-index: -1;
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
    margin: 0px 2%;
  }

  button > span {
    color: #ffffff;
    font-size: 0.939rem;
    font-weight: 500;
  }

  button:hover {
    cursor: pointer;
    background: linear-gradient(to top right, #671ae4, #b75cff);
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px auto calc(100vw / 12) auto;
  }

</style>
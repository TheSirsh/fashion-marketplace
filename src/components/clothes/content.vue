<template>
  <div class="main-container">
    <h2>Clothes are the Spirit of Fashion</h2>
    <p class="main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
    <div class="buttons">
      <button class="buttons_left">
        <span>Explore Now</span>
      </button>
      <button class="buttons_right">
        <span>Create</span>
      </button>
    </div>
    <div class="text-container">
      <div class="text-container_inner" v-for="descr in descrs">
        <p class="text-container_number">{{ descr.number }}</p>
        <p class="text-container_text">{{ descr.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        descrs: [
          { number: "100+", text: "Brands", },
          { number: "20k+", text: "Fashion Designer", },
          { number: "60+", text: "Fashion Shows", },
        ],
      }
    },
  }
</script>

<style scoped>
  .main-container {
    width: calc(100vw / 2.74);
    height: calc(100vw / 3.08);
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    text-align: left;
    margin: calc(100vw /120) 0px;
  }

  .main-text {
    margin: 0px;
    font-weight: 500;
    text-align: left;
    opacity: 0.5;
  }

  .buttons {
    width: calc(100vw / 4.97);
    height: calc(100vw / 28.8);
    display: flex;
    justify-content: space-between;
    margin: calc(100vw / 41.14) 0px;
  }

  button {
    height: calc(100vw / 28.8);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: calc(100vw / 144);
  }

  button:hover {
    cursor: pointer;
    background: linear-gradient(to top right, #671ae4, #b75cff);
  }

  .buttons_left {
    width: calc(100vw / 8.94);
  }

  .buttons_right {
    width: calc(100vw / 13.21);
  }

  span {
    color: #ffffff;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: calc(100vw / 19.2);
    margin: calc(100vw / 110.77);
  }

  .text-container_inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-container_number {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .text-container_text {
    font-weight: 500;
    margin: 0;
    padding: 0;
    opacity: 0.5;
  }
</style>
<template>
  <section>
    <h2>Top Market Statistics</h2>
    <p>The top NFTs on _________  , ranked by volume, floor price and other statistics.</p>
    <div class="buttons">
      <button class="button">
        <span>Marketplace Perfomence</span>
      </button>
      <div class="selectors-upper">
        <button class="selector" @click="activateTimeMenu">
          <span>Last 7 Days</span>
          <span class="arrow down" v-bind:class="{up: isTimeActive}"></span>
        </button>
        <button class="selector" @click="activateCategMenu">
          <span>All Categories</span>
          <span class="arrow down" v-bind:class="{up: isCategActive}"></span>
        </button>
      </div>
    </div>
    <board/>
    <div class="selectors-bottom">
      <button class="selector2">
        <span class="arrow left"></span>
        <span>1-100</span>
      </button>
      <button class="selector2">
        <span>101-200</span>
        <span class="arrow right"></span>
      </button>
    </div>
  </section>
</template>

<script>
  import board from "@/components/stats/board.vue";

  export default {
    data() {
      return {
        isTimeActive: false,
        isCategActive: false,
      }
    },
    components: {
      board,
    },
    methods: {
      activateTimeMenu() {
        this.isTimeActive = !this.isTimeActive;
        this.isCategActive = false;
      },
      activateCategMenu() {
        this.isCategActive = !this.isCategActive;
        this.isTimeActive = false;
      },
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 87.85%;
    height: calc(100vw / 1.06);
    margin: calc(100vw / 7.06) auto calc(100vw / 11.07) auto;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px auto;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: calc(100vw / 96) auto calc(100vw / 16) auto;
    opacity: 0.5;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    width: 98.18%;
  }

  .button {
    width: 16.10%;
    height: calc(100vw / 30.64);
    border-radius: calc(100vw / 288);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
  }

  button > span {
    font-size: 0.8rem;
    font-weight: 400;
    color: #ffffff;
  }

  .selectors-upper {
    display: flex;
    justify-content: space-between;
    width: 29.15%;
  }

  .selector {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 47.24%;
    height: calc(100vw / 30.64);
    background: none;
    border: solid 0.3px #ffffff;
    border-radius: calc(100vw / 288);
    transition: 0.5s ease-in-out;
  }

  .selector > span {
    transition: 0.5s ease-in-out;
  }

  .selector:hover, .selector2:hover {
    cursor: pointer;
    border: solid 0.3px #671ae4;
    transition: 0.5s ease-in-out;
  }

  .selector:hover > span, .selector2:hover > span {
    font-size: 0.9rem;
    color: #671ae4;
    transition: 0.5s ease-in-out;
  }

  .selector:hover > .arrow, .selector2:hover > .arrow {
    border-top: 1px solid #671ae4;
    border-right: 1px solid #671ae4;
    width: calc(100vw / 180);
    height: calc(100vw / 180);
  }

  .arrow {
    width: calc(100vw / 240);
    height: calc(100vw / 240);
    border-top: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
  }

  .down {
    transform: rotate(135deg);
    transition: 0.5s ease-in-out;
  }

  .up {
    transform: rotate(-45deg);
    transition: 0.5s ease-in-out;
  }

  .left {
    transform: rotate(-135deg);
  }

  .right {
    transform: rotate(45deg);
  }

  .selectors-bottom {
    display: flex;
    justify-content: space-between;
    width: 18.18%;
    margin: 0px auto;
  }

  .selector2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 43.48%;
    height: calc(100vw / 36.92);
    background: none;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: calc(100vw / 288);
    margin: 0px auto calc(100vw / 11.08) auto;
  }

  .selector2:hover {
    cursor: pointer;
  }

</style>
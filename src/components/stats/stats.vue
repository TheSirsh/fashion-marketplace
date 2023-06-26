<template>
  <section>
    <h2>Top Market Statistics</h2>
    <p>The top NFTs on _________  , ranked by volume, floor price and other statistics.</p>
    <div class="buttons">
      <button class="button">
        <span>Marketplace Perfomence</span>
      </button>
      <div class="selectors-upper">
        <button class="selector">
          <span>Last 7 Days</span>
        </button>
        <button class="selector">
          <span>All Categories</span>
        </button>
      </div>
    </div>
    <board/>
    <div class="selectors-bottom">
      <button class="selector2">
        <span>&lt; 1-100</span>
      </button>
      <button class="selector2">
        <span>101-200 &gt;</span>
      </button>
    </div>
  </section>
</template>

<script>
  import board from "@/components/stats/board.vue";

  export default {
    components: {
      board,
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
    width: 86.25%;
  }

  .button {
    width: calc(100vw / 7.2);
    height: calc(100vw / 30.64);
    border-radius: calc(100vw / 144);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
  }

  .selectors-upper {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 3.98);
  }

  .selector {
    width: calc(100vw / 8.42);
    height: calc(100vw / 30.64);
    background: none;
    border: solid 0.3px #ffffff;
    border-radius: calc(100vw / 288);
  }

  .selectors-bottom {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 6.26);
    margin: 0px auto;
  }

  .selector2 {
    width: calc(100vw / 14.4);
    height: calc(100vw / 36.92);
    background: none;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    border-radius: calc(100vw / 288);
    margin: 0px auto calc(100vw / 11.08) auto;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: #ffffff;
  }
</style>
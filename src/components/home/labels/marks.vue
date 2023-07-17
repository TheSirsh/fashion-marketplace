<template>
  <div class="main-container">
    <div v-for="label in labels" v-bind:class="label.alt">
      <img :src="setImage(label.src)" :alt="label.alt">
      <p>{{ label.p }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: [
          { src: "gas", alt: "Gas", p: "No Gas Fees", },
          { src: "nft", alt: "NFT", p: "Carbon Netural NFTs", },
          { src: "transactions", alt: "Transactions", p: "Fast And Easy Transactions", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/svg/labels-${src}.svg`)
      },
    },
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    justify-content: space-between;
    margin: calc(100vw / 22.86) auto;
    width: 100%;
    height: calc(100vw / 10.83);
  }

  p {
    margin-top: calc(100vw / 102.86);
    margin-bottom: 0;
    font-weight: 600;
  }

  img {
    height: calc(100vw / 19.2);
  }

  .NFT {
    padding-left: 6.9%;
  }
</style>
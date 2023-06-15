<template>
  <div class="main-container">
    <div>
      <img src="@/assets/svg/labels-gas.svg" alt="Gas">
      <p>No Gas Fees</p>
    </div>
    <div>
      <img src="@/assets/svg/labels-nft.svg" alt="NFT">
      <p>Carbon Netural NFTs</p>
    </div>
    <div>
      <img src="@/assets/svg/labels-transactions.svg" alt="Transactions">
      <p>Fast And Easy Transactions</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .main-container {
    display: flex;
    justify-content: space-between;
    margin: calc(100vw / 22.86) auto;
    width: calc(100vw / 1.53);
    height: calc(100vw / 10.83);
  }

  p {
    margin-top: calc(100vw / 102.86);
    font-size: calc(100vw / 72);
    font-weight: 600;
  }

  img {
    height: calc(100vw / 19.2);
  }
</style>
<template>
  <ul>
    <li class="svg">
      <img src="@/assets/svg/bell.svg" alt="">
    </li>
    <li class="svg">
      <img src="@/assets/svg/quote.svg" alt="">
    </li>
    <li class="wallet">
      <span>Wallet</span>
    </li>
    <li class="jpg">
      <img src="@/assets/jpg/avatar.jpg" alt="">
    </li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 19.14%;
    padding: 0;
  } 

  li {
    list-style: none;
  }

  .wallet {
    width: 40.3%;
    height: calc(100vw / 37.89);
    border: 0.5px solid #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }

  .jpg {
    width: 16.42%;
    height: auto;
  }

  .jpg > img {
    border-radius: 50%;
  }

  .svg {
    width: 7.46%;
    height: auto;
  }
</style>
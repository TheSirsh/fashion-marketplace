<template>
  <ul>
    <li>
      <img src="@/assets/svg/bell.svg" alt="" class="svg">
    </li>
    <li>
      <img src="@/assets/svg/quote.svg" alt="" class="svg">
    </li>
    <li class="wallet">
      <span>Wallet</span>
    </li>
    <li>
      <img src="@/assets/jpg/avatar.jpg" alt="" class="jpg">
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
    width: calc(100vw / 5.37);
  } 

  li {
    list-style: none;
  }

  .wallet {
    width: calc(100vw / 13.33);
    height: calc(100vw / 37.89);
    border: 0.5px solid #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .jpg {
    border-radius: 50%;
    width: calc(100vw / 32.73);
    height: calc(100vw / 32.73);
  }
</style>
<template>
  <ul>
    <li>
      <span>All Collections</span>
    </li>
    <li>
      <span>Verified Brands</span>
    </li>
    <li>
      <span>Verified Artists</span>
    </li>
    <li>
      <span>New Drops</span>
    </li>
    <li>
      <span>Live Shows</span>
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
    width: 100%;
    height: calc(100vw / 36);
    margin: 0;
    margin-bottom: calc(100vw / 48);
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    width: calc(100vw / 6.92);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
  }

  span {
    font-size: calc(100vw / 72);
    font-weight: 500;
  }
</style>
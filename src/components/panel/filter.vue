<template>
  <ul>
    <li v-for="filter in filters">
      <span>{{ filter.text }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        filters: [
          { text: "All Collections", },
          { text: "Verified Brands", },
          { text: "Verified Artists", },
          { text: "New Drops", },
          { text: "Live Shows", },
        ]
      }
    }
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
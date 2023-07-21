<template>
    <ul>
      <li v-for="filtr in filtrs">
        <span>{{ filtr.text }}</span>
      </li>
    </ul>
</template>

<script>
  export default {
    data() {
      return {
        filtrs: [
          { text: "Trending", },
          { text: "All Fashion NFTs", },
          { text: "Art", },
          { text: "Fashion", },
          { text: "Creators", },
          { text: "Brands", },
        ],
      }
    },
  }
</script>

<style scoped>
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: calc(100vw / 24) auto calc(100vw / 14.4) auto;
    padding: 0;
    height: calc(100vw / 36);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    width: 15.58%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
  }

  li:hover {
    cursor: pointer;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    transition: 0.5s ease-in-out;
  }

  span {
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 500;
  }

  li:hover > span {
    font-size: 1.2rem;
    transition: 0.5s ease-in-out;
  }
</style>
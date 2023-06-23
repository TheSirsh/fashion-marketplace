<template>
  <div>
    <ul>
      <li v-for="filtr in filtrs">
        <span>{{ filtr.text }}</span>
      </li>
    </ul>
  </div>
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
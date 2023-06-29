<template>
  <div>
    <h3>Trendings</h3>
    <div v-for="trending in trendings">
      <div>
        <img :src="setImage(trending.imgSrc)" :alt="trending.imgAlt">
        <div>
          <p>{{ trending.name }}</p>
          <p>{{ trending.email }}</p>
        </div>
      </div>
      <p>{{ trending.position }}</p>
    </div>
    <p>See All</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        trendings: [
          { imgSrc: "1", imgAlt: "1", name: "Lorem Ipsum", email: "@farhan khan", position: "#1 Trending", },
          { imgSrc: "2", imgAlt: "2", name: "Lorem Ipsum", email: "@farhan khan", position: "#2 Trending", },
          { imgSrc: "3", imgAlt: "3", name: "Lorem Ipsum", email: "@farhan khan", position: "#3 Trending", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/trending${src}.jpg`)
      },
    },
  }
</script>
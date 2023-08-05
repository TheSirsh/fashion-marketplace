<template>
  <div class="main-container">
    <h4>Trendings</h4>
    <div v-for="trending in trendings" class="container">
      <img :src="setImage(trending.imgSrc)" :alt="trending.imgAlt">
      <div class="text">
        <p>{{ trending.name }}</p>
        <p>{{ trending.email }}</p>
      </div>
      <p>{{ trending.position }}</p>
    </div>
    <p class="link">See All</p>
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

<style scoped>

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 21.29%;
    margin: 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    width: 87.94%;
    margin: 0px auto;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 89%;
    height: 17.96%;
    margin: 0px auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 380.95);
  }

  img {
    width: 16.67%;
    height: 88%;
    border-radius: calc(100vw / 380.95);
    margin-right: 3.73%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 53.94%;
    width: 53.5%;
  }

  .text > p {
    margin: 0px;
  }

  .text :first-child {
    font-size: 0.68rem;
    font-weight: 600;
  }

  .text :last-child {
    font-size: 0.49rem;
    font-weight: 500;
    opacity: 0.5;
  }

  .container > p {
    margin: auto 3.29%;
    font-size: 0.53rem;
    font-weight: 500;
    opacity: 0.5;
  }
 
  .link {
    width: 87.94%;
    margin: 0px auto;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
 </style>
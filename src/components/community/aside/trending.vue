<template>
  <div class="main-container">
    <h4>Trendings</h4>
    <div v-for="trending in trendings" class="container">
      <div>
        <img :src="setImage(trending.imgSrc)" :alt="trending.imgAlt">
        <div>
          <p>{{ trending.name }}</p>
          <p>{{ trending.email }}</p>
        </div>
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
    width: 100%;
    height: calc(100vw / 4.5);
    margin: calc(100vw / 96) 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    margin: calc(100vw / 72) auto calc(100vw / 57.6) calc(100vw / 72);
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 89%;
    height: calc(100vw / 25.06);
    margin: calc(100vw / 288) auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 380.95);
  }

  .container > div {
    display: flex;
    align-items: center;
  }

  img {
    width: calc(100vw / 27.6);
    height: 88%;
    border-radius: calc(100vw / 380.95);
    margin-right: calc(100vw / 126.98);
  }

  .container > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vw / 46.45);
  }

  .container > div > div > p {
    margin: 0px;
  }

  .container > div > div :first-child {
    font-size: 0.68rem;
    font-weight: 600;
  }

  .container > div > div :last-child {
    font-size: 0.49rem;
    font-weight: 500;
    opacity: 0.5;
  }

  .container > p {
    margin: auto calc(100vw / 144);
    font-size: 0.53rem;
    font-weight: 500;
    opacity: 0.5;
  }
 
  .link {
    margin: calc(100vw / 78) calc(100vw / 72) 0px 0px;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
 </style>
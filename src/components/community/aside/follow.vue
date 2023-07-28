<template>
  <div class="main-container">
    <h4>Who to follow</h4>
    <div v-for="follow in follows">
      <img :src="setImg(follow.imgSrc)" :alt="follow.imgAlt">
      <div class="follow-container">
        <span>{{ follow.name }}</span>
        <span>{{ follow.email }}</span>
      </div>
      <button>
        <span>{{ follow.span }}</span>
      </button>
    </div>
    <p>See More</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        follows: [
          { imgSrc: "follow1", imgAlt: "John Wick", name: "John Wick", email: "@johnywick", span: "Follow", },
          { imgSrc: "follow2", imgAlt: "Tracy Reyes", name: "Tracy Reyes", email: "@tracyreyes", span: "Follow", },
          { imgSrc: "follow3", imgAlt: "Cory Bass", name: "Cory Bass", email: "@corybass", span: "Follow", },
        ],
      }
    },
    methods: {
      setImg(src) {
        return require(`@/assets/jpg/${src}.jpg`)
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
    height: 25.95%;
    margin: 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    width: 87.94%;
    margin: 0px auto;
    font-size: 0.856rem;
    font-weight: 600;
    text-align: left;
  }

  .main-container > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88%;
    height: 14.48%;
    margin: 0px auto;
  }

  img {
    width: auto;
    height: 100%;
    border-radius: 50%;
  }

  .follow-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }

  .follow-container:first-child {
    font-size: 0.856rem;
    font-weight: 600;
    text-align: left;
  }

  .follow-container :last-child {
    font-size: 0.685rem;
    font-weight: 400;
    opacity: 0.5;
    text-align: left;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 51.51%;
    background-color: #6c5dd3;
    border: none;
    border-radius: calc(100vw / 9.9);
  }

  button > span {
    font-size: 0.685rem;
    font-weight: 500;
    color: #ffffff;
  }
  
  p {
    width: 87.94%;
    margin: 0px auto;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
</style>
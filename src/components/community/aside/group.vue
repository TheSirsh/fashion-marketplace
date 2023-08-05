<template>
  <div class="main-container">
    <h4>Suggested Groups</h4>
    <div v-for="group in groups" class="container">
      <div class="left">
        <img :src="setImage(group.imgSrc)" :alt="group.imgAlt">
        <p>{{ group.name }}</p>
      </div>
      <div class="right">
        <p class="number">{{ group.numder }}</p>
        <button>
          <span>{{ group.button }}</span>
        </button>
      </div>
    </div>
    <p class="link">See All Groups</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groups: [
          { imgSrc: "1", imgAlt: "Zalando", name: "Zalando", numder: "24k M", button: "Join", }, 
          { imgSrc: "2", imgAlt: "Zara", name: "Zara", numder: "24k M", button: "Join", }, 
          { imgSrc: "3", imgAlt: "Cartier", name: "Cartier", numder: "24k M", button: "Join", }, 
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/group${src}.jpg`)
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
    height: calc(100vw / 4.5);
    margin:   0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    width: 87.94%;
    margin: 0px auto;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 89%;
    height: 13.76%;
    margin: 0px auto;
  }

  .left {
    display: flex;
    align-items: center;
    width: 39.09%;
    height: 100%;
  }

  .right {
    display: flex;
    align-items: center;
    width: 44.95%;
    height: 100%;
  }

  .number {
    font-size: 0.6rem;
    font-weight: medium;
    opacity: 0.5;
    margin-right: calc(100vw / 144);
  }

  .left > p {
    margin: 0;
    font-family: "Poppins";
    font-size: 0.7rem;
    font-weight: bold;
  }
 
  img {
    width: auto;
    height: 100%;
    margin-right: 8.33%;
    border-radius: 50%;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 66.67%;
    height: 63.59%;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 323.6);
  }

  button > span {
    font-size: 0.685rem;
    font-weight: 500;
    color: #ffffff;
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
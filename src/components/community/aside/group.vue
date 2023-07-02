<template>
  <div class="main-container">
    <h4>Suggested Groups</h4>
    <div v-for="group in groups" class="container">
      <div>
        <img :src="setImage(group.imgSrc)" :alt="group.imgAlt">
        <p>{{ group.name }}</p>
      </div>
      <div>
        <p>{{ group.numder }}</p>
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
    width: 100%;
    height: calc(100vw / 4.5);
    margin: calc(100vw / 96) 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    margin: calc(100vw / 72) auto calc(100vw / 72) calc(100vw / 72);
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 89%;
    height: calc(100vw / 32.7);
    margin: calc(100vw / 115.2) auto;
  }

  .container > div {
    display: flex;
    align-items: center;
  }

  .container > div :first-child {
    font-size: 0.6rem;
    font-weight: medium;
    opacity: 0.5;
    margin-right: calc(100vw / 144);
  }

  .container > div :last-child {
    margin: 0;
    font-family: "Poppins";
    font-size: 0.7rem;
    font-weight: bold;
  }
 
  img {
    width: auto;
    height: 100%;
    margin-right: calc(100vw / 180.91);
    border-radius: 50%;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 15.87);
    height: calc(100vw / 49.48);
    background-color: #6c5dd3;
    border: none;
    border-radius: calc(100vw / 9.9);
  }

  button > span {
    font-size: 0.685rem;
    font-weight: 500;
    color: #ffffff;
  }
  
  .link {
    margin: calc(100vw / 78) calc(100vw / 72) 0px 0px;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
 </style>
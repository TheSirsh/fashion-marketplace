<template>
  <div class="main-container">
    <div class="card-container" v-for="creator in creators" v-bind:class="{activeButtonBg: creator.isFollow}">
      <img :src="setImage(creator.bgSrc)" :alt="creator.bgAlt" class="creators-bg">
        <div class="text-container">
        <img :src="setImage(creator.fotoSrc)" :alt="creator.fotoAlt" class="creators-foto">
        <h3>{{ creator.h3 }}</h3>
        <p>{{ creator.p }}</p>
        <button v-on:click="creator.isFollow = !creator.isFollow" v-bind:class="{activeButton: creator.isFollow}">
          <span v-if="creator.isFollow === false">+ Follow</span>
          <span v-else>+ Followed</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        creators: [
          { bgSrc: "bg1_adidas", bgAlt: "Adidas", fotoSrc: "foto1_adidas", fotoAlt: "Adidas", h3: "Adidas", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { bgSrc: "bg2_nike", bgAlt: "Nike", fotoSrc: "foto2_nike", fotoAlt: "Nike", h3: "Nike", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { bgSrc: "bg3_lacoste", bgAlt: "Lacoste", fotoSrc: "foto3_lacoste", fotoAlt: "Lacoste", h3: "Lacoste", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/brands2-${src}.jpg`)
      },
    },
  }
</script>

<style scoped>
  .main-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: calc(100vw / 2.74);
    margin: 0px auto;
  }
  .card-container {
    position: relative;
    width: calc(100vw / 3.70);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  }

  .activeButtonBg {
    transition: 0.5s ease-in-out;
    background-color: rgba(47, 52, 84, 0.4);
  }

  .creators-bg {
    width: 100%;
    height: calc(100vw / 5.52);
    border-radius: calc(100vw / 144);
  }

  .text-container {
    position: relative;
    top: calc(100vw / -26.67);
  }

  .creators-foto {
    width: 25.45%;
    height: calc(100vw / 14.55);
    border-radius: 50%;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: calc(100vw / 144) auto;
  }

  p {
    width: 78.92%;
    font-size: 0.75rem;
    margin: 0px auto;
    opacity: 0.5;
  }

  button {
    margin-top: calc(100vw / 65.45);
    width: 86.63%;
    height: calc(100vw / 28.8);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
    color: #ffffff;
  }
  
  button:hover {
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.5s ease-in-out;
  }

  .activeButton {
    color: #671ae4;
    border: 1px solid #671ae4;
    background: none;
    transition: 0.5s ease-in-out;
  }

</style>
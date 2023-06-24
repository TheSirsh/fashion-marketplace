<template>
  <div class="main-container">
    <div v-for="drop in drops" class="card-container">
      <img :src="setImage(drop.imgSrc)" :alt="drop.imgAlt" class="image">
      <div class="upper-text">
        <span>{{ drop.name }}</span>
        <span>{{ drop.text }}</span>
      </div>
      <div class="middle-text">
        <img :src="setImage(drop.logoSrc)" :alt="drop.imgAlt" class="img-logo">
        <span>{{ drop.nick }}</span>
      </div>
      <h4>{{ drop.h4 }}</h4>
      <p class="descr">
        {{ drop.descr }}
        <span class="lnk">{{ drop.lnk }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drops: [
          { imgSrc: "new-drops_image1", imgAlt: "1", name: "@Johny", text: "Sep 20, 2022", logoSrc: "upcoming-logo1", logoAlt: "1", nick: "Cartier", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
          { imgSrc: "new-drops_image2", imgAlt: "2", name: "@Johny", text: "Sep 20, 2022", logoSrc: "upcoming-logo2", logoAlt: "2", nick: "Hermes", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
          { imgSrc: "new-drops_image3", imgAlt: "3", name: "@Johny", text: "Sep 20, 2022", logoSrc: "upcoming-logo3", logoAlt: "3", nick: "Lacoste", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/${src}.jpg`)
      }
    }
  }
</script>

<style scoped>
  .main-container {
    width: 100%;
    margin-top: calc(100vw / 57.6);
    height: calc(100vw / 2.15);
    display: flex;
    justify-content: space-between;
  }

  .card-container {
    width: calc(100vw / 3.7);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .image {
    margin-top: calc(100vw / 55.38);
    width: calc(100vw / 4.27);
    height: calc(100vw / 3.79);
    border-radius: calc(100vw / 144);
  }

  .upper-text {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 4.27);
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
  }

  .middle-text {
    display: flex;
    width: calc(100vw / 4.27);
    height: calc(100vw / 28.8);
    justify-content: flex-start;
    align-items: center;
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: bold;
  }

  .img-logo {
    width: calc(100vw / 28.8);
    height: calc(100vw / 28.8);
    border-radius: 50%;
    margin-right: calc(100vw / 120);
  }

  h4 {
    width: calc(100vw / 4.27);
    margin: 0px;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }

  .descr {
    width: calc(100vw / 4.27);
    margin-top: 0px;
    margin-bottom: calc(100vw / 46.45);
    font-size: 0.7rem;
    font-weight: 600;
    text-align: left;
    opacity: 0.5;
  }

  .lnk {
    color: #b75cff;
  }
</style>
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
        <span class="lnk">Read More +</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drops: [
          { imgSrc: "upcoming-img1", imgAlt: "1", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo1", logoAlt: "1", nick: "Cartier", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", },
          { imgSrc: "upcoming-img2", imgAlt: "2", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo2", logoAlt: "2", nick: "Hermes", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", },
          { imgSrc: "upcoming-img3", imgAlt: "3", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo3", logoAlt: "3", nick: "Lacoste", h4: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", },
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
    width: 32.42%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .card-container:hover {
    transform: scale(1.05);
    border: 1px solid #ffffff;
    transition: 0.5s ease-in-out;
  }


  .image {
    margin-top: calc(100vw / 55.38);
    width: 86.63%;
    height: auto;
    border-radius: calc(100vw / 144);
  }

  .upper-text {
    display: flex;
    justify-content: space-between;
    width: 83.03%;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
  }

  .middle-text {
    display: flex;
    width: 83.03%;
    height: calc(100vw / 28.8);
    justify-content: flex-start;
    align-items: center;
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: bold;
  }

  .img-logo {
    width: 14.54%;
    height: auto;
    border-radius: 50%;
    margin-right: 3.6%;
  }

  h4 {
    width: 83.03%;
    margin: 0px;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }

  .descr {
    width: 83.03%;
    margin-top: 0px;
    margin-bottom: calc(100vw / 46.45);
    font-size: 0.7rem;
    font-weight: 600;
    text-align: left;
    line-height: 1.25rem;
    opacity: 0.8;
  }

  .lnk {
    color: #b75cff;
  }

  .lnk:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
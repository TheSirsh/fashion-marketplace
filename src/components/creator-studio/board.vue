<template>
  <section class="main-container">
    <div v-for="creator in creators" v-bind:class="{activeButtonBg: creator.isFollow}">
      <img :src="setImage(creator.creatorSrc)" :alt="creator.creatorAlt" class="bg">
      <img :src="setImage(creator.photoSrc)" :alt="creator.fotoAlt" class="logo">
      <h5>{{ creator.name }}</h5>
      <p>{{ creator.descr }}</p>
      <button v-on:click="creator.isFollow = !creator.isFollow" v-bind:class="{activeButton: creator.isFollow}">
        <span v-if="creator.isFollow === false">+ Follow</span>
        <span v-else>+ Followed</span>
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        creators: [
          { creatorSrc: "descr-creator1", creatorAlt: "Adidas", photoSrc: "descr-photo1", fotoAlt: "Adidas", name: "Adidas", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator2", creatorAlt: "Nike", photoSrc: "descr-photo2", fotoAlt: "Nike", name: "Nike", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator3", creatorAlt: "Lacoste", photoSrc: "descr-photo3", fotoAlt: "Lacoste", name: "Lacoste", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator4", creatorAlt: "Zalando", photoSrc: "descr-photo4", fotoAlt: "Zalando", name: "Zalando", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator5", creatorAlt: "Zara", photoSrc: "descr-photo5", fotoAlt: "Zara", name: "Zara", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator6", creatorAlt: "Cartier", photoSrc: "descr-photo6", fotoAlt: "Cartier", name: "Cartier", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator7", creatorAlt: "Gucci", photoSrc: "descr-photo7", fotoAlt: "Gucci", name: "Gucci", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,isFollow: false, },
          { creatorSrc: "descr-creator8", creatorAlt: "Hermes", photoSrc: "descr-photo8", fotoAlt: "Hermes", name: "Hermes", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
          { creatorSrc: "descr-creator9", creatorAlt: "Louis Vuitton", photoSrc: "descr-photo9", fotoAlt: "Louis Vuitton", name: "Louis Vuitton", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isFollow: false, },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/${src}.jpg`)
      },
    },
  }
</script>

<style scoped>
  .main-container {
    margin: 0px auto;
    width: 83.125%;
    height: calc(100vw / 0.86);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.99% 1.25%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  }

  .activeButtonBg {
    transition: 0.5s ease-in-out;
    background-color: rgba(47, 52, 84, 0.4);
  }

  .bg {
    width: 100%;
    height: auto;
    margin: 0px;
    border-radius: calc(100vw / 144);
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 25.45%;
    height: auto;
  }

  h5 {
    margin: 5.72% auto 0px auto;
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 700;
  }

  p {
    width: 79%;
    margin: 0px auto;
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.5;
  }

  button {
    width: 86.63%;
    height: 9.52%;
    margin: 0px auto 8% auto;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: calc(100vw / 144);
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
  }

  .activeButton {
    color: #671ae4;
    border: 1px solid #671ae4;
    background: none;
    transition: 0.5s ease-in-out;
  }
</style>
<template>
  <div class="main-container">
    <div class="card-container" v-for="item in items" >
      <img :src="setImage(item.bgSrc)" :alt="item.bgAlt" class="item-bg">
      <div class="text-container">
        <img :src="setImage(item.fotoSrc)" :alt="item.fotoAlt" class="item-foto">
        <h3>{{ item.h3 }}</h3>
        <p>{{ item.p }}</p>
      </div>
      <img :src="setImage(item.svgSrc)" :alt="item.svgAlt" class="svg">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { bgSrc: "jpg/explore-bg1.jpg", bgAlt: "1", fotoSrc: "jpg/explore-foto1.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg2.jpg", bgAlt: "2", fotoSrc: "jpg/explore-foto2.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg3.jpg", bgAlt: "3", fotoSrc: "jpg/explore-foto3.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg4.jpg", bgAlt: "4", fotoSrc: "jpg/explore-foto4.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg5.jpg", bgAlt: "5", fotoSrc: "jpg/explore-foto5.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg6.jpg", bgAlt: "6", fotoSrc: "jpg/explore-foto6.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg7.jpg", bgAlt: "7", fotoSrc: "jpg/explore-foto7.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg8.jpg", bgAlt: "8", fotoSrc: "jpg/explore-foto8.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
          { bgSrc: "jpg/explore-bg9.jpg", bgAlt: "9", fotoSrc: "jpg/explore-foto9.jpg", fotoAlt: "John Wick", h3: "John Wick", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.", svgSrc: "svg/explore.svg", svgAlt: "Explore", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/${src}`)
      },
    },
  }
</script>

<style scoped>

  .main-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: calc(100vw / 96);
    row-gap: calc(100vw / 28.8);
    width: 100%;
    height: calc(100vw / 0.86);
    margin: 0px auto;
  }
  .card-container {
    position: relative;
    width: calc(100vw / 3.70);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
  }

  .item-bg {
    width: 100%;
    height: calc(100vw / 5.52);
    border-radius: calc(100vw / 144);
  }

  .text-container {
    position: relative;
    top: calc(100vw / -26.67);
  }

  .item-foto {
    width: calc(100vw / 14.55);
    height: calc(100vw / 14.55);
    border-radius: 50%;
  }

  h3 {
    font-weight: 700;
    margin: calc(100vw / 144) auto;
  }

  p {
    width: calc(100vw / 4.69);
    font-size: 0.75rem;
    margin: 0px auto;
    opacity: 0.5;
  }

  button {
    margin-top: calc(100vw / 65.45);
    width: calc(100vw / 4.27);
    height: calc(100vw / 28.8);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
    color: #ffffff;
  }

  .svg {
    width: calc(100vw / 130.91);
    height: calc(100vw / 72);
  }
</style>
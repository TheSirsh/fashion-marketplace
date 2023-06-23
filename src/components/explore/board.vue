<template>
  <div>

    <div v-for="item in items">
      <img :src="setImage(item.bgSrc)" :alt="item.bgAlt">
      <div>
        <img :src="setImage(item.fotoSrc)" :alt="item.fotoAlt">
        <h3>{{ item.h3 }}</h3>
        <p>{{ item.p }}</p>
      </div>
      <img :src="setImage(item.svgSrc)" :alt="item.svgAlt">
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
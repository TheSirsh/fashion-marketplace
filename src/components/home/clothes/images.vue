<template>
  <div>
    <img v-for="image in images" :src="setImage(image.src)" :alt="image.alt">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          { src: "1", alt: "1", },
          { src: "2", alt: "2", },
          { src: "3", alt: "3", },
          { src: "4", alt: "4", },
          { src: "5", alt: "5", },
          { src: "6", alt: "6", },
          { src: "7", alt: "7", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/img${src}.jpg`)
      },
    },
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    width: 49.25%;
    height: calc(100vw / 2.79);
  }

  img {
    width: 31.64%;
    border-radius: calc(100vw / 144);
  }
</style>
<template>
  <section>
    <img v-for="image of images" :src="setImage(image.src)" v-bind:alt="image.alt">
  </section>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          { src: "adidas", alt: "adidas", },
          { src: "puma", alt: "Puma", },
          { src: "lacoste", alt: "Lacoste", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/svg/${src}.svg`)
      },
    },
  }
</script>

<style scoped>
  section {
    margin: calc(100vw / 12.52) auto;
    display: flex;
    justify-content: space-between;
    width: 82.87%;
    height: calc(100vw / 13.98);
  }
</style>
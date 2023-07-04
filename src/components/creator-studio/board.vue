<template>
  <section>
    <div v-for="creator in creators">
      <img :src="setImage(creator.creatorSrc)" :alt="creator.creatorAlt">
      <img :src="setImage(creator.photoSrc)" :alt="creator.fotoAlt">
      <h5>{{ creator.name }}</h5>
      <p>{{ creator.descr }}</p>
      <button>
        <span>{{ creator.button }}</span>
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        creators: [
          { creatorSrc: "descr-creator1", creatorAlt: "Adidas", photoSrc: "descr-photo1", fotoAlt: "Adidas", name: "Adidas", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator2", creatorAlt: "Nike", photoSrc: "descr-photo2", fotoAlt: "Nike", name: "Nike", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator3", creatorAlt: "Lacoste", photoSrc: "descr-photo3", fotoAlt: "Lacoste", name: "Lacoste", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator4", creatorAlt: "Zalando", photoSrc: "descr-photo4", fotoAlt: "Zalando", name: "Zalando", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator5", creatorAlt: "Zara", photoSrc: "descr-photo5", fotoAlt: "Zara", name: "Zara", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator6", creatorAlt: "Cartier", photoSrc: "descr-photo6", fotoAlt: "Cartier", name: "Cartier", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator7", creatorAlt: "Gucci", photoSrc: "descr-photo7", fotoAlt: "Gucci", name: "Gucci", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator8", creatorAlt: "Hermes", photoSrc: "descr-photo8", fotoAlt: "Hermes", name: "Hermes", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
          { creatorSrc: "descr-creator9", creatorAlt: "Louis Vuitton", photoSrc: "descr-photo9", fotoAlt: "Louis Vuitton", name: "Louis Vuitton", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", button: "+ Follow", },
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
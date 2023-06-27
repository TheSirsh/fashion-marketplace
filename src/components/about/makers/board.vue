<template>
  <div class="main-container">
    <div v-for="maker in makers" class="card-container">
      <img :src="setImage(maker.src)" :alt="maker.alt">
      <p>{{ maker.name }}</p>
      <div>
        <span>{{ maker.job }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        makers: [
          { src: "1", alt: "1", name: "Ebony Nash", job: "Co Founder", },
          { src: "2", alt: "2", name: "Cory Bass", job: "CEO", },
          { src: "3", alt: "3", name: "Grady Thomas", job: "CTO", },
          { src: "4", alt: "4", name: "Tracy Reyes", job: "COO", },
          { src: "5", alt: "5", name: "Christina Maldonado", job: "Finance", },
          { src: "6", alt: "6", name: "Gerald Kim", job: "Member", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/maker-img${src}.jpg`)
      }
    }
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: calc(100vw / 1.46);
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: calc(100vw / 4.53);
    height: calc(100vw / 3.19);
  }

  img {
    width: 100%;
    height: calc(100vw / 4);
    border-radius: calc(100vw / 288);
  }

  p {
    font-size: 1.1rem;
    font-weight: 600;
    margin: calc(100vw / 72) auto calc(100vw / 144) auto;
  }

  .card-container > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100vw / 11.43);
    height: calc(100vw / 40);
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0px auto;
    border-radius: calc(100vw / 9.6);
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
</style>
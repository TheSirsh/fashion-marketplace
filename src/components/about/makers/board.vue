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
    height: 76.34%;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 31.39%;
    height: 46.03%;
    border-radius: calc(100vw / 288);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: calc(100vw / 288);
  }

  p {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  .card-container > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 39.62%;
    height: 7.96%;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0px auto;
    border-radius: calc(100vw / 9.6);
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .card-container:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    transition: 0.5s ease-in-out;

  }

  .card-container:hover > p {
    font-size: 1.2rem;
    transition: 0.5s ease-in-out;
  }

  .card-container:hover > div {
    background-color: #6c5dd3;
    transition: 0.5s ease-in-out;
  }
</style>
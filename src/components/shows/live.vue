<template>
  <section>
    <h3>Live Now</h3>
    <div>
      <div v-for="live in lives" class="live-container">
        <p>Since: {{ live.since }}</p>
        <div class="img-container">
          <img :src="setImage(live.bgSrc)" :alt="live.bgAlt">
          <div class="live">
            <span>Live</span>
            <img src="@/assets/svg/point.svg" alt="">
          </div>
          <div class="number">
            <img src="@/assets/svg/man.svg" alt="">
            <span>{{ live.number }}</span>
          </div>
        </div>
        <div class="brand-container">
          <span class="">Showing :</span>
          <img src="@/assets/jpg/zalando.jpg" alt="Zalando">
          <span>Zalando</span>
          <img src="@/assets/svg/check.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        lives: [
          { since: "8:24 am", bgSrc: "1", bgAlt: "", number: "55", },
          { since: "9:24 am", bgSrc: "2", bgAlt: "", number: "45", },
          { since: "10:24 am", bgSrc: "3", bgAlt: "", number: "35", },
          { since: "11:24 am", bgSrc: "4", bgAlt: "", number: "25", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/live-bg${src}.jpg`)
      },
    },
  }
</script>

<style scoped>

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
    margin: 0px;
  }

  section > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .live-container {
    width: calc(100vw / 5.39);
  }

  .live-container > p {
    font-size: 0.7rem;
    font-weight: 500;
    opacity: 0.8;
    text-align: right;
  }

  .img-container {
    width: 100%;
    position: relative;
    margin: calc(100vw / 90) 0px calc(100vw / 96) 0px;
  }

  .img-container > img {
    width: 100%;
    height: auto;
    border-radius: calc(100vw / 240);
  }

  .live {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100vw / 144);
    right: calc(100vw / 144);
    width: calc(100vw / 23.61);
    height: calc(100vw / 68.57);
    border-radius: calc(100vw / 17.78);
    background-color: #e20000;
  }

  .live > span {
    font-size: 0.675rem;
    margin-right: calc(100vw / 192);
  }

  .live > img {
    width: calc(100vw / 240);
    height: auto;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100vw / 38.92);
    right: calc(100vw / 144);
    width: calc(100vw / 23.61);
    height: calc(100vw / 68.57);
    border-radius: calc(100vw / 17.78);
    background: linear-gradient(to top right, #671ae4, #b75cff);
  }

  .number > span {
    font-size: 0.675rem;
  }

  .number > img {
    width: calc(100vw / 130.91);
    height: auto;
    margin-right: calc(100vw / 192);
  }

  .brand-container {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 6.43);
    height: calc(100vw / 53.33);
  }

  .brand-container :nth-child(1) {
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .brand-container :nth-child(2) {
    width: calc(100vw / 48);
    height: auto;
    border-radius: 50%;
  }

  .brand-container :nth-child(3) {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .brand-container :nth-child(4) {
    width: calc(100vw / 80);
    height: auto;
  }
  
</style>
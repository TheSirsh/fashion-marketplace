<template>
  <section>
    <h3>Upcoming Shows</h3>
    <div>
      <div v-for="upcoming in upcomings"  class="upcoming-container">
        <p>{{ upcoming.time }}</p>
        <img :src="setImage(upcoming.bgSrc)" :alt="upcoming.bgAlt">
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
        upcomings: [
          { time: "Today 8 PM", bgSrc: "1", bgAlt: "", },
          { time: "Today 9 PM", bgSrc: "2", bgAlt: "", },
          { time: "Tomorrow 9 PM", bgSrc: "3", bgAlt: "", },
          { time: "Coming Soon", bgSrc: "4", bgAlt: "", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/upcoming-bg${src}.jpg`)
      },
    },
  }
</script>

<style scoped>

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: calc(100vw / 14.4) auto;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
    margin: 0px 0px calc(100vw / 90) 0px;
  }

  section > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .upcoming-container {
    width: 21.9%;
  }

  .upcoming-container:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  .upcoming-container > p {
    margin: 0;
    font-size: 0.7rem;
    font-weight: 500;
    opacity: 0.8;
    text-align: right;
    letter-spacing: 2%;
  }

  .upcoming-container > img {
    width: 100%;
    height: auto;
    border-radius: calc(100vw / 240);
    margin: calc(100vw / 288) 0px calc(100vw / 96) 0px;
  }

  .brand-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 83.9%;
    height: calc(100vw / 53.33);
  }

  .brand-container :nth-child(1) {
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .brand-container :nth-child(2) {
    width: 13.39%;
    height: auto;
    border-radius: 50%;
  }

  .brand-container :nth-child(3) {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .brand-container :nth-child(4) {
    width: 8.04%;
    height: auto;
  }

</style>
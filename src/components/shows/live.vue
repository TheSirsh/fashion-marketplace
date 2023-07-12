<template>
  <section>
    <h3>Live Now</h3>
    <div>
      <div v-for="live in lives">
        <p>Since: {{ live.since }}</p>
        <div>
          <img :src="setImage(live.bgSrc)" :alt="live.bgAlt">
          <div>
            <span>Live</span>
            <img src="@/assets/svg/point.svg" alt="">
          </div>
          <div>
            <img src="@/assets/svg/man.svg" alt="">
            <span>{{ live.number }}</span>
          </div>
        </div>
        <div>
          <span>Showing :</span>
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
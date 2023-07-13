<template>
  <section>
    <h3>Live Now</h3>
    <div>
      <div v-for="upcoming in upcomings">
        <p>{{ upcoming.time }}</p>
        <img :src="setImage(upcoming.bgSrc)" :alt="upcoming.bgAlt">
        <div>
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
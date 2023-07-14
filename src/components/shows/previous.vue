<template>
  <section>
    <h3>Previous Shows</h3>
    <div>
      <div v-for="prev in prevs">
        <p>{{ prev.time }}</p>
        <img :src="setImage(prev.bgSrc)" :alt="prev.bgAlt">
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
        prevs: [
          { time: "18 Mins Ago", bgSrc: "1", bgAlt: "", },
          { time: "1 Hour Ago", bgSrc: "2", bgAlt: "", },
          { time: "2 Days Ago", bgSrc: "3", bgAlt: "", },
          { time: "3 Days Ago", bgSrc: "4", bgAlt: "", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/prev-bg${src}.jpg`)
      },
    },
  }
</script>
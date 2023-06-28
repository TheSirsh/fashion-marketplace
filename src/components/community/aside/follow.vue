<template>
  <h3>Who to follow</h3>
  <div v-for="follow in follows">
    <img :src="setImg(follow.imgSrc)" :alt="follow.imgAlt">
    <div>
      <span>{{ follow.name }}</span>
      <span>{{ follow.email }}</span>
    </div>
    <button>
      <span>{{ follow.span }}</span>
    </button>
  </div>
  <p>See More</p>
</template>

<script>
  export default {
    data() {
      return {
        follows: [
          { imgSrc: "follow1", imgAlt: "John Wick", name: "John Wick", email: "@johnywick", span: "Follow", },
          { imgSrc: "follow2", imgAlt: "Tracy Reyes", name: "Tracy Reyes", email: "@tracyreyes", span: "Follow", },
          { imgSrc: "follow3", imgAlt: "Cory Bass", name: "Cory Bass", email: "@corybass", span: "Follow", },
        ],
      }
    },
    methods: {
      setImg(src) {
        return require(`@/assets/jpg/${src}.jpg`)
      },
    },
  }
</script>
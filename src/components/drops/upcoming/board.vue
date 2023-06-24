<template>
  <div>
    <div v-for="drop in drops">
      <img :src="setImage(drop.imgSrc)" :alt="drop.imgAlt">
      <div>
        <span>{{ drop.name }}</span>
        <span>{{ drop.text }}</span>
      </div>
      <div>
        <img :src="setImage(drop.logoSrc)" :alt="drop.imgAlt">
        <span>{{ drop.nick }}</span>
      </div>
      <p>{{ drop.p }}</p>
      <p>
        {{ drop.descr }}
        <span>{{ drop.lnk }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drops: [
          { imgSrc: "upcoming-img1", imgAlt: "1", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo1", logoAlt: "1", nick: "Cartier", p: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
          { imgSrc: "upcoming-img2", imgAlt: "2", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo2", logoAlt: "2", nick: "Hermes", p: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
          { imgSrc: "upcoming-img3", imgAlt: "3", name: "@Johny", text: "Announcing", logoSrc: "upcoming-logo3", logoAlt: "3", nick: "Lacoste", p: "Lorem Ipsum dolor", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ut placerat scelerisque viverra adipiscing ut semper.", lnk: " Read More +", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/${src}.jpg`)
      }
    }
  }
</script>
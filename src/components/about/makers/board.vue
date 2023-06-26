<template>
  <div>
    <div v-for="maker in makers">
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
<template>
  <div>
    <h3>Suggested Groups</h3>
    <div v-for="group in groups">
      <div>
        <img :src="setImage(group.imgSrc)" :alt="group.imgAlt">
        <p>{{ group.name }}</p>
      </div>
      <div>
        <p>{{ group.numder }}</p>
        <button>
          <span>{{ group.button }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groups: [
          { imgSrc: "1", imgAlt: "Zalando", name: "Zalando", numder: "24k M", button: "Join", }, 
          { imgSrc: "2", imgAlt: "Zara", name: "Zara", numder: "24k M", button: "Join", }, 
          { imgSrc: "3", imgAlt: "Cartier", name: "Cartier", numder: "24k M", button: "Join", }, 
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/group${src}.jpg`)
      },
    },
  }
</script>
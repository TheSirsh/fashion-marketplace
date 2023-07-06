<template>
  <div>
    <div>
      <p>My Groups</p>
      <button>
        <span>Exclusive Groups</span>
      </button>
      <div v-for="group in groups">
        <div>
          <img :src="setImage(group.imgSrc)" :alt="group.imgAlt">
          <span>{{ group.brand }}</span>
        </div>
        <div>
          <span>{{ group.subscr }}</span>
          <button>
            <span>{{ group.button }}</span>
          </button>
        </div>
      </div>
      <p>See All Groups</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groups: [
          { imgSrc: "1", imgAlt: "Zalando", brand: "Zalando", subscr: "24k M", button: "View", },
          { imgSrc: "2", imgAlt: "Zara", brand: "Zara", subscr: "24k M", button: "View", },
          { imgSrc: "3", imgAlt: "Cartier", brand: "Cartier", subscr: "24k M", button: "View", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/aside-group${src}.jpg`)
      }
    }
  }
</script>
<template>
  <div>
    <div>
      <p>Photos</p>
      <p>See All Photos</p>
    </div>
    <div>
      <div v-for="photo in photos">
        <img :src="setImage(photo.imgSrc)" :alt="photo.imgAlt">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        photos: [
          { imgSrc: "1", imgAlt: "1", },
          { imgSrc: "2", imgAlt: "2", },
          { imgSrc: "3", imgAlt: "3", },
          { imgSrc: "4", imgAlt: "4", },
          { imgSrc: "5", imgAlt: "5", },
          { imgSrc: "6", imgAlt: "6", },
          { imgSrc: "7", imgAlt: "7", },
          { imgSrc: "8", imgAlt: "8", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/content_aside_groups${src}.jpg`)
      },
    },
  }
</script>
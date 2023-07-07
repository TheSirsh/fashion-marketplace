<template>
  <div class="main-photos-container">
    <div class="text-container">
      <p class="photo-text">Photos</p>
      <p class="photo-see">See All Photos</p>
    </div>
    <div class="photos-container">
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

<style scoped>

  .main-photos-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 288);
    margin: 0px auto;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88.41%;
    margin: calc(100vw / 72);
  }

  p {
    margin: 0;
    font-weight: 600;
  }

  .photo-text {
    font-size: 1rem;
  }

  .photo-see {
    font-size: 0.8rem;
    color: #6c5dd3
  }

  .photos-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(100vw / 144);
    width: 88.41%;
    margin: calc(100vw / 72);
  }

  img {
    border-radius: calc(100vw / 360);
  }

</style>
<template>
  <div>
    <img src="@/assets/jpg/img1.jpg" alt="">
    <img src="@/assets/jpg/img2.jpg" alt="">
    <img src="@/assets/jpg/img3.jpg" alt="">
    <img src="@/assets/jpg/img4.jpg" alt="">
    <img src="@/assets/jpg/img5.jpg" alt="">
    <img src="@/assets/jpg/img6.jpg" alt="">
    <img src="@/assets/jpg/img7.jpg" alt="">
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100vw / 2.44);
    height: calc(100vw / 2.79);
  }

  img {
    width: calc(100vw / 7.7);
    border-radius: calc(100vw / 144);
  }
</style>
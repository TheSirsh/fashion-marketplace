<template>
  <section>
    <div class="text-container">
      <h5>Since 2014</h5>
      <h2>What We Do</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.</p>
      <button>
        <span>More +</span>
      </button>
    </div>
    <div class="img-container">
      <img src="@/assets/jpg/what-img1.jpg" alt="1" class="img1">
      <img src="@/assets/jpg/what-img2.jpg" alt="2" class="img2">
      <img src="@/assets/jpg/what-img3.jpg" alt="3" class="img3">
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .text-container {
    width: calc(100vw / 2.33);
  }

  h5 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #6c5dd3;
    width: calc(100vw / 15.65);
    border-bottom: 2px solid #6c5dd3;
    margin: 0px;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: calc(100vw / 144) 0px calc(100vw / 72) 0px;
    text-align: left;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    width: 100%;
    margin: 0;
    opacity: 0.5;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 13.09);
    height: calc(100vw / 28.8);
    margin: calc(100vw / 32) 0px 0px 0px;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  span {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
  }

  .img-container {
    position: relative;
    width: calc(100vw / 3.85);
    height: calc(100vw / 3.22);
  }

  img {
    position: absolute;
    width: calc(100vw / 4.44);
    height: calc(100vw / 3.63);
    border-radius: calc(100vw / 144);
  }

  .img1 {
    top: 0;
    left: 0;
    z-index: 3;
  }

  .img2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .img3 {
    bottom: 0;
    right: 0;
    z-index: 1;
  }
</style>
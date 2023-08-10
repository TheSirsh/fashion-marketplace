<template>
  <section>
    <div class="text-container">
      <h2>Wear Digital Fashion</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.</p>
      <button>
        <span>Explore</span>
      </button>
    </div>
    <div class="img-container">
      <img src="@/assets/jpg/explore-img1.jpg" alt="1" class="img1">
      <img src="@/assets/jpg/explore-img2.jpg" alt="2" class="img2">
      <img src="@/assets/jpg/explore-img3.jpg" alt="3" class="img3">
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
    height: calc(100vw / 3.22);
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 51.28%;
    height: 92.01%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px;
    text-align: left;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    line-height: 180%;
    width: 100%;
    margin: 0px;
    opacity: 0.5;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25.48%;
    height: 14.71%;
    margin: 0px;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  span {
    font-family: 'Poppins';
    font-size: 1rem;
    color: #ffffff;
    font-weight: medium;
  }

  button:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
  }

  button:hover > span {
    text-decoration: underline;
  }

  .img-container {
    position: relative;
    width: 32.02%;
    height: 100%;
  }

  img {
    position: absolute;
    width: 86.63%;
    height: 88.81%;
    border-radius: calc(100vw / 144);
  }

  img:hover {
    z-index: 4;
    transition: 0.5s ease-in-out;
  } 

  .img1 {
    top: 0;
    left: 0;
    z-index: 3;
  }

  .img1:hover {
    transform: translateY(-5%) scale(1.1);
  }

  .img2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .img2:hover {
    transform: translate(-50%, -55%) scale(1.1);
  }

  .img3 {
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .img3:hover {
    transform: translateY(-5%) scale(1.1);
  }
</style>
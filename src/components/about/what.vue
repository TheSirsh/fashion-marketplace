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
    height: calc(100vw / 3);
    margin: calc(100vw / 8) auto;
  }
  .text-container {
    width: 52.83%;
    height: 77.94%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h5 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #6c5dd3;
    width: 14.91%;
    border-bottom: 2px solid #6c5dd3;
    margin: 0px;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px;
    text-align: left;
  }

  p {
    width: 100%;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    line-height: 180%;
    opacity: 0.5;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 13.09);
    height: calc(100vw / 28.8);
    margin: 0px;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  button:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
  }

  button:hover > span {
    text-decoration: underline;
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
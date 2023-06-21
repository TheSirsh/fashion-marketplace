<template>
  <div class="main-container">

    <div class="card-container">
      <img src="@/assets/jpg/creators-bg1.jpg" alt="" class="creators-bg">
      <div class="text-container">
        <img src="@/assets/jpg/creators-foto1.jpg" alt="" class="creators-foto">
        <h3>John Wick</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>
          <span>+ Follow</span>
        </button>
      </div>
    </div>
    
    <div class="card-container">
      <img src="@/assets/jpg/creators-bg2.jpg" alt="" class="creators-bg">
      <div class="text-container">
        <img src="@/assets/jpg/creators-foto2.jpg" alt="" class="creators-foto">
        <h3>John Wick</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>
          <span>+ Follow</span>
        </button>
      </div>
    </div>

    <div class="card-container">
      <img src="@/assets/jpg/creators-bg3.jpg" alt="" class="creators-bg">
        <div class="text-container">
        <img src="@/assets/jpg/creators-foto3.jpg" alt="" class="creators-foto">
        <h3>John Wick</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>
          <span>+ Follow</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .main-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: calc(100vw / 2.74);
    margin: 0px auto;
  }
  .card-container {
    position: relative;
    width: calc(100vw / 3.70);
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 144);
  }

  .creators-bg {
    width: 100%;
    height: calc(100vw / 5.52);
    border-radius: calc(100vw / 144);
  }

  .text-container {
    position: relative;
    top: calc(100vw / -26.67);
  }

  .creators-foto {
    width: calc(100vw / 14.55);
    height: calc(100vw / 14.55);
    border-radius: 50%;
  }

  h3 {
    font-size: calc(100vw / 72);
    font-weight: bold;
    margin: calc(100vw / 144) auto;
  }

  p {
    width: calc(100vw / 4.69);
    font-size: calc(100vw / 96);
    margin: 0px auto;
    opacity: 0.5;
  }

  button {
    margin-top: calc(100vw / 65.45);
    width: calc(100vw / 4.27);
    height: calc(100vw / 28.8);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
    color: #ffffff;
    font-size: calc(100vw / 72);
  }
</style>
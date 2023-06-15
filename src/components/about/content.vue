<template>
  <div class="main-container">
    <img src="@/assets/jpg/about-img1.jpg" alt="">
    <div class="text-container">
      <h3>Fashion That Speaks</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
      <button>
        <span>Show more</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100vw / 2.57);
    margin: calc(100vw / 15.82) auto;
  }

  img {
    width: calc(100vw / 3.14);
    height: 100%;
    border-radius: calc(100vw / 144);
  }

  .text-container {
    width: calc(100vw / 2.45);
    height: calc(100vw / 3.22);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: calc(100vw / 40);
    font-weight: 700;
    margin: calc(100vw / 72) 0px;
    text-align: left;
  }

  p {
    font-size: calc(100vw / 72);
    font-weight: 400;
    margin: calc(100vw / 72) 0px;
    text-align: left;
    color: #95929f;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100vw / 8.94);
    height: calc(100vw / 26.67);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 240);
    margin-top: calc(100vw / 28.8);
  }

  span {
    font-size: calc(100vw / 72);
    font-weight: 600;
    color: #ffffff;
  }
</style>
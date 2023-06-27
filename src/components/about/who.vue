<template>
  <section>
    <h5>About Us</h5>
    <h2>Who we are.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt enim, libero. In dignissim tortor sit sit convallis morbi.</p>
    <button>
      <span>More +</span>
    </button>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #6c5dd3;
    width: calc(100vw / 13.71);
    margin: 0px auto;
    border-bottom: 2px solid #6c5dd3;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: calc(100vw / 144) auto calc(100vw / 72) auto;
  }

  p {
    width: calc(100vw / 2.33);
    font-size: 1rem;
    font-weight: 500;
    margin: 0px auto;
    opacity: 0.5;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 13.09);
    height: calc(100vw / 28.8);
    margin: calc(100vw / 32) auto 0px auto;
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  span {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
  }
</style>
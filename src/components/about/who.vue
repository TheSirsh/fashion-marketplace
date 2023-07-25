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
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 52.83%;
    height: calc(100vw / 3.76);
    margin: 0px auto;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #6c5dd3;
    margin: 0px auto;
    border-bottom: 2px solid #6c5dd3;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0px auto;
  }

  p {
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    margin: 0px auto;
    line-height: 180%;
    opacity: 0.5;
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 17.83%;
    height: calc(100vw / 28.8);
    margin: 0px auto;
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
</style>
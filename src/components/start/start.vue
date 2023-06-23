<template>
  <section>
    <h2>Highest Quality Collection</h2>
    <button>
      <span>Get Started</span>
    </button>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.20);
    height: calc(100vw / 4.5);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border-radius: calc(100vw / 144);
    margin: calc(100vw / 9.6) auto calc(100vw / 11.08) auto;
  }

  h2 {
    width: calc(100vw / 3.63);
    height: calc(100vw / 9.6);
    margin: 0px auto;
    padding-top: calc(100vw / 28.8);
    font-size: 2.5rem;
    font-weight: 700;
  }

  button {
    width: calc(100vw / 9.29);
    height: calc(100vw / 28.8);
    border: none;
    border-radius: calc(100vw / 144);
    background-color: rgba(255, 255, 255, 0.5);
  }

  span {
    font-weight: 500;
    color: #ffffff;
  }
</style>
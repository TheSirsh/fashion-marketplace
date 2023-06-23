<template>
  <section>
    <hr class="line1">
    <button>Main Collection</button>
    <button>Creators Market</button>
    <hr class="line2">
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: calc(100vw / 24) auto;
    height: calc(100vw / 26.18);
  }

  .line1 {
    margin: 0px;
    position: absolute;
    top: 50%;
    width: 100%;
    border: none;
    border-top: 0.5px solid #ffffff;
    opacity: 0.2;
    z-index: -2;
  }
  
  .line2 {
    margin: 0px;
    position: absolute;
    height: 1px;
    top: 50%;
    left: 33.5%;
    width: 33%;
    border: none;
    border-top: 1px solid #6c5965;
    z-index: -1;
  }

  button {
    width: calc(100vw / 7.16);
    height: calc(100vw / 26.18);
    background-color: #493e52;
    font-family: "SF Pro Display";
    font-size: 0.94rem;
    font-weight: 500;
    color: #ffffff;
    border: none;
    border-radius: calc(100vw / 6.96);
  }

  button:hover {
    background-color: #6c5dd3;
    cursor: pointer;
  }
</style>
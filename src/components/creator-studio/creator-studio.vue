<template>
  <div>
    <descr/>
    <div class="text-container">
      <h4>Expand Your Market Like Others,</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis scelerisque vulputate elementum, egestas neque scelerisque turpis.</p>
    </div>
    <board/>
    <div class="button-container">
      <button class="first">
        <span>Create Now</span>
      </button>
      <button class="second">
        <span>Customize Now</span>
      </button>
    </div>
    <hr>
  </div>
</template>

<script>
  import descr from "@/components/creator-studio/descr/descr.vue";
  import board from "@/components/creator-studio/board.vue";

  export default {
    components: {
      descr, board,
    }
  }
</script>

<style scoped>

  section {
    width: 83.125%;
    display: flex;
    flex-direction: column;
    margin: calc(100vw / 11.08) 0px calc(100vw / 21.82) 0px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: calc(100vw / 6.61);
    margin: 0px auto;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0px;
    margin-bottom: calc(100vw / 72);
  }

  p {
    width: calc(100vw / 3.27);
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
    margin: 0px auto;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 61.32%;
    height: calc(100vw / 12.86);
    margin: calc(100vw / 7.58) auto calc(100vw / 11.08) auto;
  }

  button {
    width: 48%;
    height: 100%;
    border-radius: calc(100vw / 144);
    font-family: "Poppins";
    font-size: 1.3rem;
    color: #ffffff;
  }

  .first {
    background: linear-gradient(to top right, #671ae4, #b75cff);
  }

  .second {
    background-color: #6c5dd3;
  }

  hr {
    width: 80%;
    opacity: 0.2;
  }
</style>
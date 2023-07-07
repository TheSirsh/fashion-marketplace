<template>
  <div>
    <p>Meta Look</p>
    <img src="@/assets/jpg/content_aside_meta.jpg" alt="Model" class="model">
    <form>
      <button>
        <img src="@/assets/svg/decrease.svg" alt="Decrease">
      </button>
      <input type="range">
      <button>
        <img src="@/assets/svg/increase.svg" alt="Increase">
      </button>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  div {
    margin: calc(100vw / 48) 0px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
  }

  p {
    margin: calc(100vw / 72) auto calc(100vw / 96) calc(100vw / 72);
    text-align: left;
    font-size: 1rem;
    font-weight: 600  ;
  }

  .model {
    width: 45.8%;
    height: auto;
    border-radius: calc(100vw / 371.13);
    margin: 0px auto calc(100vw / 108.19) auto;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto calc(100vw / 110.77) auto;
    width: 66.47%;
    height: calc(100vw / 53.33);
  }

  input[type=range] {
    appearance: none;
    background: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 64.17%;
    height: calc(100vw / 426.04);
    background-color: #747474;
    border-radius: calc(100vw / 10.11);
    margin: auto 0px;

  }

  input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: calc(100vw / 193.81);
    height: calc(100vw / 193.81);
    border-radius: 50%;
    background-color: #ffffff;
    margin-top: calc(100vw / -960);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100vw / 49.78);
    height: calc(100vw / 53.33);
    background: rgba(255, 255, 255, 0.2);
    border: none;
  }

</style>
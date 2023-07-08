<template>
  <div class="main-groups-container">
    <div class="text-container">
      <p>My Groups</p>
      <button class="button-groups">
        <span>Exclusive Groups</span>
      </button>
    </div>
      <div v-for="group in groups" class="group">
        <div class="group-left">
          <img :src="setImage(group.imgSrc)" :alt="group.imgAlt">
          <span>{{ group.brand }}</span>
        </div>
        <div class="group-right">
          <span>{{ group.subscr }}</span>
          <button>
            <span>{{ group.button }}</span>
          </button>
        </div>
      </div>
      <p>See All Groups</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groups: [
          { imgSrc: "1", imgAlt: "Zalando", brand: "Zalando", subscr: "24k M", button: "View", },
          { imgSrc: "2", imgAlt: "Zara", brand: "Zara", subscr: "24k M", button: "View", },
          { imgSrc: "3", imgAlt: "Cartier", brand: "Cartier", subscr: "24k M", button: "View", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/aside-group${src}.jpg`)
      }
    }
  }
</script>

<style scoped>

  .main-groups-container {
    width: 100%;
    height: calc(100vw / 4.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 288);
    margin: 0px auto;
  }

  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 91.3%;
    margin: calc(100vw / 84.71) calc(100vw / 144) calc(100vw / 28.8) calc(100vw / 72);
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    margin: 0px;
  }

  .text-container > button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45.4%;
    height: calc(100vw / 49.66);
    background: none;
    border: 0.3px solid #ffffff;
    font-size: 0.6rem;
    font-weight: 400;
    color: #ffffff;
  }

  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87.83%;
    height: calc(100vw / 32.7);
    margin: 0px auto;
  }

  .group-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .group-left > span {
    font-family: 'Poppins';
    font-size: 0.7rem;
    font-weight: 700;
  }

  img {
    width: calc(100vw / 32.70);
    border-radius: 50%;
    margin-right: calc(100vw / 131.27);
  }

  .group-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .group-right > span {
    font-family: 'Poppins';
    font-size: 0.6rem;
    font-weight: 500;
    opacity: 0.5;
    margin-right: calc(100vw / 144);
  }

  .group-right > button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100vw / 15.65);
    height: calc(100vw / 51.43);
    border: none;
    border-radius: calc(100vw / 320);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    font-family: "Poppins";
    font-size: 0.6rem;
    font-weight: 600;
    color: #ffffff;
  }

  .main-groups-container > p {
    margin: calc(100vw / 80) calc(100vw / 72) calc(100vw / 144) auto;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }

</style>
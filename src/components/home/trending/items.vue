<template>
  <div class="main-container">

    <div class="container" v-for="item in items">
      <img :src="setImage(item.pictSrc)" :alt="item.pictAlt" class="pict">
      <div class="upper-text">
        <span class="upper-text_left">{{ item.sellerName }}</span>
        <span class="upper-text_right">{{ item.bidText }}</span>
      </div>
      <div class="middle-text">
        <span>{{ item.text }}</span>
        <span>{{ item.bid }}</span>
      </div>
      <div class="bottom-text">
        <button class="button-like">
          <img :src="setImage(item.buttonSrc)" :alt="item.buttonAlt" class="img-like">
        </button>
        <button class="button-buy">
          <span>{{ item.buttonSpan }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { pictSrc: "jpg/trending-img1.jpg", pictAlt: "1", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", buttonSrc: "svg/panel-unheart.svg", buttonAlt: "Like", buttonSpan: "Buy Now", },
          { pictSrc: "jpg/trending-img2.jpg", pictAlt: "2", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", buttonSrc: "svg/panel-unheart.svg", buttonAlt: "Like", buttonSpan: "Buy Now", },
          { pictSrc: "jpg/trending-img3.jpg", pictAlt: "3", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", buttonSrc: "svg/panel-unheart.svg", buttonAlt: "Like", buttonSpan: "Buy Now", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/${src}`)
      },
    },
  }
</script>

<style scoped>
  .main-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(100vw / 96);
    width: 100%;
    height: calc(100vw / 0.79);
    margin: 0px auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 3.7);
    height: calc(100vw / 2.42);
    background-color: rgba(255, 255, 255, 0.1);
    font-family: "Popins";
    border-radius: calc(100vw / 72);
  }

  .pict {
    width: calc(100vw / 4.27);
    height: calc(100vw / 3.79);
    border-radius: calc(100vw / 144);
    margin-top: calc(100vw / 55.38);
  }

  .upper-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 4.27);
    opacity: 0.5;
    font-weight: 500;
  }

  .upper-text_right {
    font-size: 0.75rem;
  }

  .middle-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 4.27);
    font-family: "Poppins";
    font-weight: 700;
  }

  .bottom-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 4.27);
    margin-bottom: calc(100vw / 57.6);
  }

  .button-like {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 53.33);
    height: calc(100vw / 60);
    background: none;
    border: none;
    padding: 0;
  }

  .img-like {
    width: 100%;
    height: 100%;
  }

  .button-buy {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100vw / 4.95);
    height: calc(100vw / 28.8);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  span {
    font-weight: 600;
    color: #ffffff;
  }
</style>
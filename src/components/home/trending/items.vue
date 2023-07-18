<template>
  <div class="items-container">

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
        <button class="button-like" v-on:click="item.isLike = !item.isLike">
          <img v-if="item.isLike == true" src="@/assets/svg/panel-heart.svg" alt="Like" class="img-like">
          <img v-else src="@/assets/svg/notLike.svg" alt="Like" class="img-like">
        </button>
        <button class="button-buy">
          <span>Buy Now</span>
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
          { pictSrc: "jpg/trending-img1.jpg", pictAlt: "1", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", isLike: false, },
          { pictSrc: "jpg/trending-img2.jpg", pictAlt: "2", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", isLike: false, },
          { pictSrc: "jpg/trending-img3.jpg", pictAlt: "3", sellerName: "@Johny", bidText: "Current Bid", text: "Lorem Ipsum", bid: "0.005 ETH", isLike: false, },
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
  .items-container {
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
    height: calc(100vw / 2.42);
    background-color: rgba(255, 255, 255, 0.1);
    font-family: "Poppins";
    border-radius: calc(100vw / 72);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  }

  .pict {
    width: 86.63%;
    height: auto;
    border-radius: calc(100vw / 144);
    margin-top: calc(100vw / 55.38);
  }

  .pict:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  .upper-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 86.63%;
    opacity: 0.5;
    font-weight: 500;
    font-size: 1rem;
  }

  .upper-text_right {
    font-size: 0.75rem;
  }

  .middle-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 86.63%;
    font-size: 1rem;
    font-family: "Poppins";
    font-weight: 700;
  }

  .bottom-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 86.63%;
    margin-bottom: calc(100vw / 57.6);
  }

  .button-like {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 8%;
    height: calc(100vw / 60);
    background: none;
    border: none;
    padding: 0;
  }

  .img-like {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .button-buy {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 86.09%;
    height: calc(100vw / 28.8);
    background: linear-gradient(to top right, #671ae4, #b75cff);
    border: none;
    border-radius: calc(100vw / 144);
  }

  .button-buy:hover {
    cursor: pointer;
  }

  .button-buy:hover > span {
    font-size: 1.5rem;
    transition: 0.5s ease-in-out;
  }

  .button-buy > span {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
  }
</style>
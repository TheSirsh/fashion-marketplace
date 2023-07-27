<template>
  <section>
    <h2>Feeds</h2>
    <div v-for="feed in feeds" class="main-container">
      <div class="author-container">
        <img :src="setImage(feed.avatSrc)" :alt="feed.avaAlt" class="author-img">
        <div>
          <p>{{ feed.nick }}</p>
          <p>{{ feed.email }}</p>
        </div>
        <p>{{ feed.time }}</p>
      </div>
      <p>{{ feed.descr }}</p>
      <img :src="setImage(feed.imgSrc)" :alt="feed.imgAlt">
      <div class="button-container">
        <button v-for="button in buttons">
          <img :src="setImage(button.imgSrc)" :alt="button.imgAlt">
          <span>{{ button.span }}</span>
        </button>
      </div>
      <form>
          <img src="@/assets/jpg/input.jpg" alt="">
          <input type="text" placeholder="Write a comment">
        </form>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        feeds: [
          { avatSrc: "jpg/feeds-ava1.jpg", avaAlt: "John Wick", nick: "John Wick", email: "@johnywick", time: "4m", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg1.jpg", imgAlt: "1", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", },
          { avatSrc: "jpg/feeds-ava2.jpg", avaAlt: "Cory Bass", nick: "Cory Bass", email: "@corybass", time: "24m", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg2.jpg", imgAlt: "2", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", },
          { avatSrc: "jpg/feeds-ava3.jpg", avaAlt: "James", nick: "James", email: "@james", time: "1d", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg3.jpg", imgAlt: "3", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", },
        ],
        buttons: [
          { imgSrc: "svg/like.svg", imgAlt: "Like", span: "Like", },
          { imgSrc: "svg/comment.svg", imgAlt: "comment", span: "Comment", },
          { imgSrc: "svg/share.svg", imgAlt: "Share", span: "Share", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/${src}`)
      }
    }
  }
</script>

<style scoped>

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 64.58%;
    height: calc(100vw / 0.67);
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    margin: calc(100vw / 144) 0px 0px 0px;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 29.78%;
    width: 93.7%;
    margin-left: 6.3%;
  }

  .author-container {
    display: flex;
    height: 6.76%;
    margin: 0px;
  }

  .author-img {
    width: auto;
    height: 100%;
    border-radius: 50%;
  }

  .author-container > div {
    display: flex;
    flex-direction: column;
    margin-left: calc(100vw / 110.77);
  }

  .author-container > div > p {
    margin: 0px;
  }

  .author-container > div:first-child {
    font-size: 1rem;
    font-weight: 600;
  }

  .author-container > div :last-child {
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .author-container > p {
    margin: 0px;
    margin-left: calc(100vw / 144);
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .main-container > p {
    margin: 0px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .main-container > img {
    width: 100%;
    height: calc(100vw / 3.4);
    border-radius: calc(100vw / 288);
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.3%;
  }

  .button-container > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    height: 100%;
    color: #ffffff
  }

  .button-container > button > img {
    width: auto;
    height: 100%;
  }

  .button-container > button > span {
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: calc(100vw / 144);
  }

  form {
    display: flex;
    width: 100%;
    height: 6.13%;
    border-radius: calc(100vw / 9.6);
    background-color: #464b67;
  }

  form > img {
    width: auto;
    height: 74.36%;
    margin: auto 1.94% auto 0.64%;
    border-radius: 50%;
  }

  input[type="text"] {
    width: 90.5%;
    background: none;
    border: none;
    height: 80%;
    padding-top: 0.5%;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 400;
    outline: none;
  }

  input[type="text"]::placeholder {
    font-size: 0.7rem;
    font-weight: 400;
    color: #ffffff;
  }

</style>
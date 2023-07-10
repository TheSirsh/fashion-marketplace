<template>
  <section>
    <div v-for="feed in feeds" class="feeds-container">
      <div class="upper-container">
        <img :src="setImage(feed.avaSrc)" :alt="feed.avaAlt">
        <div>
          <p class="upper-container_name">{{ feed.name }}
            <span>{{ feed.time }}</span>
          </p>
          <p class="nick">{{ feed.nick }}</p>
        </div>
      </div>
      <p>{{ feed.descr }}</p>
      <img :src="setImage(feed.pictSrc)" :alt="feed.pictAlt">
      <div class="inter-container">
        <div v-for="inter in inters">
          <img :src="setImage(inter.pictSrc)" :alt="inter.pictAlt">
          <p class="inter-text">{{ inter.text }}</p>
          <p class="inter-text2">{{ inter.text2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        feeds: [
          { avaSrc: "jpg/ava1.jpg", avaAlt: "1", name: "Farhan Khan", time: "4m", nick: "@farhan", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", pictSrc: "jpg/bg1.jpg", pictAlt: "1", },
          { avaSrc: "jpg/ava2.jpg", avaAlt: "2", name: "Farhan Khan", time: "2d", nick: "@farhan", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", pictSrc: "jpg/bg2.jpg", pictAlt: "2", },
        ],
        inters : [
          { pictSrc: "svg/like.svg",  pictAlt: "Like", text: "Liked", text2: "You and 12k others.", },
          { pictSrc: "svg/comment.svg",  pictAlt: "Comment", text: "Comment", text2: "12 Comments", },
          { pictSrc: "svg/share.svg",  pictAlt: "Share", text: "Share", text2: "3 Shares", },
        ]
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

  section {
    width: calc(100vw / 2.16);
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .feeds-container {
    width: 100%;
    height: calc(100vw / 2.28);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .upper-container {
    display: flex;
  }

  .upper-container > img {
    width: calc(100vw / 33.49);
    height: calc(100vw / 33.49);
    border-radius: 50%;
    margin-right: calc(100vw / 110.77);
  }

  .upper-container > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vw / 33.49);
  }

  .upper-container_name {
    margin: 0px;
    font-size: 1rem;
    font-weight: 600;
  }

  .upper-container_name > span {
    margin-left: calc(100vw / 144);
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .nick {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.5;
  }

  .feeds-container > p {
    margin: calc(100vw / 57.6) 0px calc(100vw / 90) 0px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .feeds-container > img {
    width: 100%;
    height: calc(100vw / 3.38);
    border-radius: calc(100vw / 288);
  }

  .inter-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: calc(100vw / 62.61) 0px calc(100vw / 93.39) 0px;
  }


  .inter-container > div {
    display: flex;
    align-items: center;
    margin-bottom: calc(100vw / 22.15);
  }

  .inter-container > div > img {
    width: calc(100vw / 72);
    height: calc(100vw / 72);
    margin-right: calc(100vw / 144);
  }

  .inter-text {
    margin: 0px  calc(100vw / 144) 0px 0px;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .inter-text2 {
    margin: 0;
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.5;
  }
</style>
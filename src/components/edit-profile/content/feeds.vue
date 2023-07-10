<template>
  <section>
    <div v-for="feed in feeds">
      <div>
        <img :src="setImage(feed.avaSrc)" :alt="feed.avaAlt">
        <div>
          <p>{{ feed.name }}
            <span>{{ feed.time }}</span>
          </p>
          <p>{{ feed.nick }}</p>
        </div>
      </div>
      <p>{{ feed.descr }}</p>
      <img :src="setImage(feed.pictSrc)" :alt="feed.pictAlt">
      <div>
        <div v-for="inter in inters">
          <img :src="setImage(inter.pictSrc)" :alt="inter.pictAlt">
          <p>{{ inter.text }}</p>
          <p>{{ inter.text2 }}</p>
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
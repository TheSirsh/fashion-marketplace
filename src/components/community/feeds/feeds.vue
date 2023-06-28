<template>
  <section>
    <h2>Feeds</h2>
    <div v-for="feed in feeds">
      <div>
        <img :src="setImage(feed.avatSrc)" :alt="feed.avaAlt">
        <div>
          <p>{{ feed.nick }}</p>
          <p>{{ feed.email }}</p>
        </div>
        <p>{{ feed.time }}</p>
      </div>
      <p>{{ feed.descr }}</p>
      <img :src="setImage(feed.imgSrc)" :alt="feed.imgAlt">
      <div>
        <button v-for="button in buttons">
          <img :src="setImage(button.imgSrc)" :alt="button.V">
          <span>{{ button.span }}</span>
        </button>
        <form>
          <img src="" alt="">
          <input type="text">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        feeds: [
          { avatSrc: "jpg/feeds-ava1.jpg", avaAlt: "John Wick", nick: "John Wick", email: "@johnywick", time: "4m", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg1.jpg", imgAlt: "1", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", placeholder: "Write a comment", },
          { avatSrc: "jpg/feeds-ava2.jpg", avaAlt: "Cory Bass", nick: "Cory Bass", email: "@corybass", time: "24m", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg2.jpg", imgAlt: "2", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", placeholder: "Write a comment", },
          { avatSrc: "jpg/feeds-ava3.jpg", avaAlt: "James", nick: "James", email: "@james", time: "1d", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imgSrc: "jpg/feeds-jpg3.jpg", imgAlt: "3", imgButtonSrc: "jpg/input.jpg", imgButtonAlt: "", placeholder: "Write a comment", },
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
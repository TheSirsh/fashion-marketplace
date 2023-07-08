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
        <div>
          <img :src="setImage(feed.likeSrc)" :alt="feed.likeAlt">
          <p>{{ feed.likeText }}</p>
          <p>{{ feed.likeText2 }}</p>
        </div>
        <div>
          <img :src="setImage(feed.commSrc)" :alt="feed.commAlt">
          <p>{{ feed.commText }}</p>
          <p>{{ feed.commText2 }}</p>
        </div>
        <div>
          <img :src="setImage(feed.shareSrc)" :alt="feed.shareAlt">
          <p>{{ feed.shareText }}</p>
          <p>{{ feed.shareText2 }}</p>
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
          { avaSrc: "", avaAlt: "", name: "", time: "", nick: "", descr: "", pictSrc: "", pictAlt: "", likeSrc: "", likeAlt: "", likeText: "", likeText2: "", commSrc: "", commAlt: "", commText: "", commText2: "", shareSrc: "", shareAlt: "", shareText: "", shareText2: "", },
        ],
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/${src}.jpg`)
      }
    }
  }
</script>
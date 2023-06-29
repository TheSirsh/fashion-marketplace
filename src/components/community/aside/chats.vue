<template>
  <div>
    <h3>Recent Chats</h3>
    <div v-for="chat in chats">
      <img :src="setImage(chat.imgSrc)" :alt="chat.imgAlt">
      <div>
        <div>
          <span>{{ chat.name }}</span>
          <span>{{ chat.time }}</span>
        </div>
        <p>{{ chat.text }}</p>
      </div>
    </div>
    <p>See All Inbox</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chats: [
          { imgSrc: "1", imgAlt: "1", name: "Farhan Khan", time: "11:01 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, platea aliquet suscipit pellentesque.", },
          { imgSrc: "2", imgAlt: "2", name: "Farhan Khan", time: "11:01 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, platea aliquet suscipit pellentesque.", },
          { imgSrc: "3", imgAlt: "3", name: "Farhan Khan", time: "11:01 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, platea aliquet suscipit pellentesque.", },
        ],
      }
    },
    methods: {
      setImage(src) { 
        return require(`@/assets/jpg/chats${src}.jpg`)
      },
    },
  }
</script>
<template>
  <div class="main-container">
    <h4>Recent Chats</h4>
    <div v-for="chat in chats" class="container">
      <img :src="setImage(chat.imgSrc)" :alt="chat.imgAlt">
      <div>
        <div>
          <span>{{ chat.name }}</span>
          <span>{{ chat.time }}</span>
        </div>
        <p>{{ chat.text }}</p>
      </div>
    </div>
    <p class="link">See All Inbox</p>
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

<style scoped>

  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vw / 4.5);
    margin: calc(100vw / 96) 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    margin: calc(100vw / 72) auto calc(100vw / 171.02) calc(100vw / 72);
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 89%;
    height: calc(100vw / 26.98);
    margin: calc(100vw / 63.41) auto calc(100vw / 180) auto;
  }

  .container > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .container > div > div :first-child {
    font-size: 0.64rem;
    font-weight: 700;
    margin-right: calc(100vw / 134.45);
  }

  .container > div > div :last-child {
    font-size: 0.57rem;
    font-weight: 400;
    opacity: 0.6;
  }

  .container > div > p {
    font-size: 0.57rem;
    margin: 0;
  }
 
  img {
    width: auto;
    height: 100%;
    margin-right: calc(100vw / 180.91);
    border-radius: 50%;
  }
  
  .link {
    margin: 0px calc(100vw / 72) 0px 0px;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
 </style>
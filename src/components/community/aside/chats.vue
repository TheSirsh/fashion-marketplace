<template>
  <div class="main-container">
    <h4>Recent Chats</h4>
    <div v-for="chat in chats" class="container">
      <img :src="setImage(chat.imgSrc)" :alt="chat.imgAlt">
      <div>
        <div class="text-container">
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
    justify-content: space-around;
    width: 100%;
    height: 21.29%;
    margin: 0px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: calc(100vw / 336.45);
  }

  h4 {
    width: 87.94%;
    margin: 0px auto;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 89%;
    height: 16.875%;
    margin: 0px auto;
  }

  .container > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 82.67%;
    height: 100%;
  }

  .text-container {
    width: 100%;
    text-align: left;
  }

  .text-container :first-child {
    font-size: 0.64rem;
    font-weight: 700;
    margin-right: 4.03%;
  }

  .text-container :last-child {
    font-size: 0.57rem;
    font-weight: 400;
    opacity: 0.6;
  }

  .container > div > p {
    line-height: 138%;
    font-size: 0.57rem;
    font-weight: 500;
    margin: 0;
    height: 58.07%;
    text-align: left;
  }
 
  img {
    width: auto;
    height: 74.07%;
    margin-right: 3.33%;
    border-radius: 50%;
  }
  
  .link {
    width: 87.94%;
    margin: 0px auto;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6c5dd3;
  }
 </style>
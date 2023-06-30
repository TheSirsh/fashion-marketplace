<template>
  <aside>
    <form>
      <img src="@/assets/svg/search.svg" alt="">
      <input type="text" placeholder="Search Posts">
    </form>
    <follow/>
    <group/>
    <trending/>
    <chats/>
  </aside>
</template>

<script>
  import follow from './follow.vue';
  import group from './group.vue';
  import trending from './trending.vue';
  import chats from './chats.vue';

  export default {
    components: {
      follow, group, trending, chats,
    }
  }
</script>

<style scoped>
  aside {
    width: calc(100vw / 4.19);
    display: flex;
    flex-direction: column;
  }
  
  form {
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(100vw / 30);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    background: none;
    border-radius: calc(100vw / 7.83);
  }

  img {
    width: calc(100vw / 68.57);
    height: calc(100vw / 68.57);
    margin-left: calc(100vw / 62.61);
  }

  input {
    width: 75%;
    margin-left: calc(100vw / 96);
    background: none;
    border: none;
  }

  input::placeholder {
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 400;
  }
</style>
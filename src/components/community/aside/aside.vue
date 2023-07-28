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
    width: 27.30%;
    height: calc(100vw / 0.96);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.19%;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    background: none;
    border-radius: calc(100vw / 7.83);
    margin: 0;
  }

  img {
    width: auto;
    height: 43.75%;
    margin-left: 6.69%;
    margin-right: 4.36%;
  }

  input {
    width: 75%;
    background: none;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 400;
  }

  input::placeholder {
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 400;
  }
</style>
<template>
  <form action="">
    <button>
      <img src="@/assets/svg/search.svg" alt="">
    </button>
    <input type="search" placeholder="Search Items, Fashion, Collection and Users">
  </form>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  form {
    display: flex;
    align-items: center;
    width: calc(100vw / 4.02);
    height: calc(100vw / 30);
    border: 0.5px solid #ffffff;
    border-radius: 184px;
  }

  button {
    width: calc(100vw / 68.57);
    height: calc(100vw / 68.57);
    margin: 0px calc(100vw / 96);
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  img {
    width: calc(100vw / 68.57);
    height: calc(100vw / 68.57);
  }

  input {
    width: calc(100vw / 5.29);
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }

  input::placeholder {
    font-size: 0.7rem;
    font-weight: 400;
  }
</style>
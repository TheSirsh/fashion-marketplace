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
    width: 25.57%;
    height: calc(100vw / 30);
    border: 0.5px solid #ffffff;
    border-radius: 184px;
    box-sizing: border-box;
  }

  button {
    width: 5.87%;
    height: 43.75%;
    margin: 0px calc(100vw / 96);
    border: none;
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
  }

  input[type="search"] {
    width: 80%;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 1rem;
    font-weight: 400;
    opacity: 1;
    color: #ffffff;
    letter-spacing: 3%;
    padding: 0;
    outline: none;
  }

  input[type="search"]:focus {
    border: none;
  }

  input[type="search"]::placeholder {
    vertical-align: middle;
    font-size: 0.66rem;
    font-weight: 400;
    opacity: 1;
    color: #ffffff;
    letter-spacing: 3%;
    padding: 0;
    border: none;
  }

  input[type="search"] ::-ms-value {
    vertical-align: middle;
    font-size: 0.66rem;
    font-weight: 400;
    opacity: 1;
    color: #ffffff;
    letter-spacing: 3%;
    padding: 0;
    border: none;
  }

</style>
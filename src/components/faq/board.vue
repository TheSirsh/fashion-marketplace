<template>
  <div>
    <input v-for="inpt in inpts" type="text" :placeholder="inpt.placeholder">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inpts: [
          { placeholder: "Lorem ipsum ipsum ?", },
          { placeholder: "Lorem ipsum ipsum ?", },
          { placeholder: "Lorem ipsum ipsum ?", },
          { placeholder: "Lorem ipsum ipsum ?", },
          { placeholder: "Lorem ipsum ipsum ?", },
          { placeholder: "Lorem ipsum ipsum ?", },
        ],
      }
    },
  }
</script>

<style scoped>
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: calc(100vw / 96);
    width: 100%;
    height: calc(100vw / 5.76);
  }

  input {
    width: calc(100vw / 2.44);
    height: calc(100vw / 28.8);
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5)
  }

  input::placeholder {
    font-size: calc(100vw / 72);
    font-weight: medium;
  }
</style>
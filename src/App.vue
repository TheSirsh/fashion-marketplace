<template>
  <headr/>
  <collection/>
</template>

<script>
  import headr from './components/header/header.vue';
  import collection from './components/collection/collection.vue';

  export default {
    components: {
      headr, collection,
    }
  }
</script>

<style>
@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  src: url("@/assets/fonts/SF-Pro-Display-Regular.otf");
}

@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  src: url("@/assets/fonts/SF-Pro-Display-Medium.otf");
}

@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  src: url("@/assets/fonts/SF-Pro-Display-Semibold.otf");
}

@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  src: url("@/assets/fonts/SF-Pro-Display-Bold.otf");
}

@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 800;
  src: url("@/assets/fonts/SF-Pro-Display-Heavy.otf");
}

#app {
  font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #984D38 -20%, #181E41 70%);
  overflow-x: hidden;
}
</style>
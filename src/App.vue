<template>
  <loader v-if="isLoading"/>
  <headr/>
  <router-view/>
  <footr/>
</template>

<script>
  import loader from "@/components/loader/loader.vue";
  import headr from "@/components/header/header.vue";
  import footr from "@/components/footer/footer.vue";
  import router from "./router";

  export default {
    data() {
      return {
        isLoading: true,
      }
    },
    mounted() {
      this.isLoading = false;
    },
    components: {
      loader, headr, footr, router,
    },
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

html {
  font-size: calc(100vw / 72);
}

#app {
  font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  background: linear-gradient(to bottom right, #984D38 -20%, #181E41 70%);
  overflow-x: hidden;
}
</style>
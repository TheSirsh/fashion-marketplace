<template>
  <header>
    <div class="container">
      <div class="logo">Logo</div>
      <search-bar/>
      <navig-panel/>
      <control-panel/>
    </div>
  </header>
</template>

<script>
  import searchBar from "@/components/header/search-bar.vue";
  import navigPanel from "@/components/header/navig-panel.vue";
  import controlPanel from "@/components/header/control-panel.vue";

  export default {
    components: {
      searchBar, navigPanel, controlPanel,
    },
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: calc(100vw / 14.26);
    margin: 0;
    padding: 0;
    color: #FFFFFF;
  }

  .container {
    width: 94.2%;
    height: 48%;
    margin: 0px auto;
    padding-top: calc(100vw / 55.38);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: calc(100vw / 90);
    font-weight: 600;
  }

  .logo {
    font-family: Roboto;
    font-weight: bold;
    font-size: calc(100vw / 40);
    color: #6C5DD3;
  }
</style>
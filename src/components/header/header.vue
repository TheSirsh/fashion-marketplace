<template>
  <header>
    <div class="container">
      <div>Logo</div>
      <search-bar/>
      <navig-panel/>
      <control-panel/>
    </div>
  </header>
</template>

<script>
  import searchBar from './search-bar.vue';
  import navigPanel from './navig-panel.vue';
  import controlPanel from './control-panel.vue';

  export default {
    components: {
      searchBar, navigPanel, controlPanel,
    }
  }
</script>
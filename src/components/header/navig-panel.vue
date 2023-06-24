<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/explore">Explore</router-link>
    <li>Personal Collection</li>
    <router-link to="/drops">Drops</router-link>
    <li>More</li>
  </nav>
</template>

<script>
import router from '@/router/index';
  export default {
    components: {
      router,
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 2.87);
  }

  li {
    list-style: none;
  }
</style>
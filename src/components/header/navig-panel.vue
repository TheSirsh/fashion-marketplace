<template>
  <nav>
    <router-link to="/" @click="deactivateSubMenu()">Home</router-link>
    <router-link to="/explore" @click="deactivateSubMenu()">Explore</router-link>
    <li>Personal Collection</li>
    <router-link to="/drops" @click="deactivateSubMenu()">Drops</router-link>
    <li class="down" @click="activateSubMenu()"
    >More
      <ul class="submenu" v-bind:class="{active: isActive}">
        <router-link to="/stats">Stats</router-link>
        <li>Shows</li>
        <router-link to="/about">About Us</router-link>
        <li>Community</li>
        <li>Creator studio</li>
        <li>Edit Profile</li>
        <li>Settings</li>
      </ul>
    </li>
  </nav>
</template>

<script>
import router from '@/router/index';
  export default {
    data() {
      return {
        isActive: false
      }
    },
    components: {
      router,
    },
    methods: {
      activateSubMenu() {
        this.isActive = !this.isActive;
      },
      deactivateSubMenu() {
        this.isActive = false;
      }
    },
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

  .down {
    position: relative;    
  }

  .down:hover {
    cursor: pointer;
  }

  .active {
    transform: scaleY(1) !important;
  }

  .submenu {
    position: absolute;
    justify-content: space-around;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: calc(100vw / 7.61);
    height: calc(100vw / 5.35);
    background-color: #212749;
    z-index: 10;
    transition: 0.5s ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0;
    padding: 0;
  }

  .submenu > li {
    text-align: left;
    font-size: 0.7rem;
    font-weight: 400;
    margin: 0px calc(100vw / 96);
    padding: calc(100vw / 144) 0px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .submenu > li:last-child {
    border: none;
  }

</style>
<template>
  <nav>
    <router-link to="/" @click="deactivateSubMenu()">Home</router-link>
    <router-link to="/explore" @click="deactivateSubMenu()">Explore </router-link>
    <li>Personal Collection</li>
    <router-link to="/drops" @click="deactivateSubMenu()">Drops</router-link>
    <li class="down" @click="activateSubMenu()"
    >More
      <span class="arrow" v-bind:class="{up: isUp}"></span>
      <ul class="submenu" v-bind:class="{active: isActive}">
        <router-link to="/stats">Stats</router-link>
        <router-link to="/shows">Shows</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/creator-studio">Creator-studio</router-link>
        <router-link to="/edit-profile">Edit Profile</router-link>
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
        isUp: false,
        isActive: false,
      }
    },
    components: {
      router,
    },
    methods: {
      activateSubMenu() {
        this.isActive = !this.isActive;
        this.isUp = !this.isUp;
      },
      deactivateSubMenu() {
        this.isActive = false;
        this.isUp = false;
      }
    },
  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    width: 35.82%;
  }

  li {
    list-style: none;
  }

  a {
    font-size: 0.8rem;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
  }

  .down {
    position: relative;
    display: flex;
    align-items: center;
  }

  .down:hover {
    cursor: pointer;
  }

  .arrow {
    width: calc(100vw / 240);
    height: calc(100vw / 240);
    border-top: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    margin-left: calc(100vw / 240);
    transform: rotate(135deg);
    transition: 0.5s ease-in-out;
  }

  .up {
    transform: rotate(-45deg);
    transition: 0.5s ease-in-out;
  }

  .active {
    transform: scaleY(1) !important;
  }

  .submenu {
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 370.59%;
    height: calc(100vw / 5.35);
    background-color: #212749;
    z-index: 10;
    transition: 0.5s ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0;
    padding: 0;
  }

  .submenu > a {
    text-align: left;
    font-size: 0.7rem;
    font-weight: 400;
    margin: 0px calc(100vw / 96);
    padding: calc(100vw / 144) 0px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
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
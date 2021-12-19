<template>
  <StandardTopNavbar id="nav" class="mcolor-bg-black-75">
    <img src="@/assets/logo.png" alt="logo" class="logo" />
    <router-link class="rl" to="/">Training Videos</router-link>
    <router-link class="rl" to="/about">About</router-link>
  </StandardTopNavbar>

  <div class="mcolor-bg-black-75" id="body-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StandardTopNavbar from './components/StandardTopNavbar.vue'

export default defineComponent({
  components: {
    StandardTopNavbar,
  }
})
</script>


<style lang="css">

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


body {
  padding: 0;
  margin: 0;
  overflow: auto;
  background-color: #fff;
  background-color: #363636;
}

#app {
  font-family: 'JetBrains Mono', monospace !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#body-container {
  width: 95%;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  padding: 25px;
}

#nav {
  border-bottom: 1px solid #d6d5d5;
  justify-content: flex-start;
  height: 3.5rem;
  display: flex;
  align-items: center;
}

button {
    margin-top: 50px;
    background-color: transparent;
    border: 1px solid #eb1e23;
    color: #eb1e23;
    padding: 10px;
    border-radius: 15px;
}

button:hover {
    background-color: #eb1e23;
    color: ghostwhite;
}

.logo {
  width: 125px;
  margin-left: 15px;
}

.rl {
  text-decoration: none;
  display: inline;
  white-space: nowrap;
  padding-top: 15px;
  margin-left: 20px;

  color: #eb1e23;
  padding: 5px;
  transition: ease-in-out 0.2s all;
}

.rl:hover {
  color: #e0e721;
}

@media (max-width: 920px) {
  #nav {
    height: auto;
    display: grid;
    margin-left: auto;
    justify-content: center;
  }

  .logo {
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .rl {
    margin-left: auto;
    margin-right: auto;
    border: #eb1e23 1px solid;
    padding: 10px;
    border-radius: 10px;
  }
}

.mcolor-bg-red {
  background-color: #eb1e23;
}

.mcolor-bg-yellow {
  background-color: #e0e721;
}

.mcolor-bg-black-full {
  background-color: #191919;
}

.mcolor-bg-black-75 {
  background-color: #191919;
}

.mcolor-bg-black-50 {
  background-color: #191919;
  filter: brightness(50%);
}

.mcolor-bg-black-25 {
  background-color: #191919;
  filter: brightness(25%);
}

.mcolor-txt-red {
  color: #eb1e23;
}

.mcolor-txt-yellow {
  color: #e0e721;
}
</style>

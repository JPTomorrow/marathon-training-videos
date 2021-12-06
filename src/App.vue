<template>
  <div id="nav">
    <router-link class="rl" to="/">Home</router-link>
    <router-link class="rl" to="/portfolio_image_grid">Image Grid</router-link>
    <router-link class="rl" to="/color_picker_test">Color Picker</router-link>
    <router-link class="rl" to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="css">
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: rgb(40, 40, 40);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #2c3e50;
  color: #fff;
  border-bottom: 1px solid ghostwhite;
}

.rl {
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  transition: ease-in-out 0.2s all;
}
.rl:hover {
  background-color: #fff;
  color: #2c3e50;
}
</style>

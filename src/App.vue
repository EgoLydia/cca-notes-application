<template>
  <div id="nav">
    <nav-menu></nav-menu>
  </div>
  <router-view />
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  components: {
    NavMenu,
  },
};
</script>
<style>
body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app > div:last-of-type {
  margin-top: 100px;
}
</style>

<template>
  <div>
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
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
  /*text-align: center;*/ /*This affects all other components, i suggest it be added to the needed pages insted*/
  color: #2c3e50;
}

#app > div:last-of-type{
  margin-top:100px;
}

</style>

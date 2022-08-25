<template>
  <div id="nav">
    <nav-menu>
      <div class="logo">
        <p>CCA Frontend Cohort Note App</p>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/notes">Notes</router-link>
        <router-link to="/SignupPage">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </nav-menu>
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
  text-align: center;
  color: #2c3e50;
}
</style>

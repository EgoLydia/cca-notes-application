<template>
  <div id="nav">
    <nav>
      <div class="logo">
        <p>CCA Frontend Cohort Note App</p>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/notes">Notes</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  font-weight: bold;
  color: #2c3e50;
}
img {
  max-width: 30px;
}
.links a {
  margin-right: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
nav {
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

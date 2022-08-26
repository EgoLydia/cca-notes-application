<template>
  <div id="nav">
    <nav>
      <div class="logo">
        <p>CCA Frontend Cohort Note App</p>
      </div>
      <div class="links">
        <i @click="openMenu" class="ri-menu-line ham"> </i>
        <div v-show="isOpen" @click="closeDropdown" class="mobile-links">
          <router-link to="/">Home</router-link>
          <router-link to="/note-list">Notes</router-link>
          <router-link to="/SignupPage">Sign Up</router-link>
          <router-link to="/login">Login</router-link>
        </div>
        <div class="desktop-links">
          <router-link to="/">Home</router-link>
          <router-link to="/note-list">Notes</router-link>
          <router-link to="/SignupPage">Sign Up</router-link>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.mobile-links {
  position: fixed;
  left: 0;
  width: 100%;
  background-color: #e4fff3;
  padding-bottom: 10px;
}
.desktop-links {
  display: none;
}
.ham {
  font-size: 28px;
  cursor: pointer;
}
.logo {
  font-weight: bold;
  color: #2c3e50;
}
.links a {
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  padding: 10px;
}
#nav {
  background-color: #e4fff3;
  width: 100%;
  position: fixed;
  top: 0;
}
nav {
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

@media (min-width: 768px) {
  .desktop-links {
    display: flex;
  }
  .ham,
  .mobile-nav {
    display: none;
  }
}
</style>

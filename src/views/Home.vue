<template>
  <landing-page></landing-page>
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
export default {
  name: "Home",
  components: {
    LandingPage,
  },
};
</script>

<style scoped>
.info {
  display: flex;
  margin-top: 16px;
  gap: 25px;
}
h1 {
  font-size: 36px;
  width: 500px;
  margin: 0 auto;
}
section {
  margin-bottom: 64px;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: #000;
}
button {
  padding: 15px;
  background-color: #e4fff3;
  border-radius: 5px;
  border: none;
}
footer {
  background-color: #e4fff3;
  padding: 20px;
}
</style>

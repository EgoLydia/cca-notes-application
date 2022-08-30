<template>
  <form>
    <p>{{ $route.params.id }}</p>
  </form>
</template>

<script>
// import { mapGetters } from "vuex";
// import router from "../router";

export default {
    name: 'NoteComponent',

    computed: {
      noteContent() {
        return this.noteContent(this.$route.params.id);
      }
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
  /* text-align: center; */
  color: #2c3e50;
}

#app > div:last-of-type {
  margin-top: 100px;
}
</style>

<template>
  <div class="footer">
    <a class="separator" href=""
      ><img src="../assets/icons8-medium-icons-66.png" alt="tile"
    /></a>
    <a @click="AddNote()" class="separator" href="">
      <img src="../assets/icons8-plus-150.png" alt="add-note-button" />
    </a>
    <a class="separator" href=""
      ><img src="../assets/icons8-person-60.png" alt="person-avatar" />
    </a>
  </div>
</template>

<script setup>
//import { ref } from "vue";

// function AddNote() {
//   $router.push("/*****");
// }
</script>

<style scoped>
body {
  position: relative;
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
  padding-top: 20px;
  position: fixed;
  bottom: 0;

  background: #42b983;
  width: 100%;
}
.separator {
  padding: 0 30px;
}

/* Laptop and Desktop */
@media (min-width: 769px) {
  .footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: none;
    position: fixed;
    bottom: 0;
  }
}
</style>

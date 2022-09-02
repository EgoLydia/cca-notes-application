<template>
  <div class="footer">
    <a class="separator" href="#"
      ><img src="../assets/icons8-medium-icons-66.png" alt="tile"
    /></a>
    <router-link to="/AddNotePage" class="separator" href="#">
      <img src="../assets/icons8-plus-66.png" alt="add-note-button" />
    </router-link>
    <a class="separator" href="#"
      ><img src="../assets/icons8-person-60.png" alt="person-avatar" />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
body {
  position: relative;
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid gray;
  padding-top: 15px;
  position: fixed;
  bottom: 0;
  background: #e4fff3;
  width: 100%;
}
.separator {
  padding: 0 30px;
}

/* Laptop and Desktop */
@media (min-width: 768px) {
  .footer {
    display: flex;
    justify-content: center;
    padding-top: 15px;
    border-top: none;
    position: fixed;
    bottom: 0;
  }
}
</style>

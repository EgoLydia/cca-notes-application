<template>
  <div class="the-header">
    <h1 class="separator">Hello Murphy, <span>Good Morning</span></h1>

    <img
      class="separator"
      src="../assets/icons8-person-90.png"
      alt="user_image"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.the-header {
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 70px 0;
}

.separator {
  padding: 0 60px;
  font-size: 20px;
}
span {
  display: block;
}

/* Laptop and Desktop */
@media (min-width: 769px) {
  .the-header {
    display: flex;
    justify-content: space-around;
  }
  .separator {
    padding: 0 90px;
    font-size: 30px;
  }
  img {
    display: none;
  }
  span {
    display: inline-block;
  }
}
</style>

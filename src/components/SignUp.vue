<template>
  <div>
    <form @submit="submitForm">
        <label>Firstname:</label><br>
        <input v-model="firstname" required /><br>

        <label>Lastname:</label><br>
        <input v-model="lastname" required /><br>

        <label>Email:</label><br>
        <input v-model="email" required /><br>

        <label>Password:</label><br>
        <input v-model="password" type="password" :class="[inputBorder ? 'good' : 'bad']" required /><br>

        <label>Confirm Password:</label><br>
        <input v-model="confirmPassword" type="password" required /><br>

        <button class="btn" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",

  data() {
    return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
  },

  computed: {
    inputBorder() {
      if(this.password.length > 2 && this.password.length < 10){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
    form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #e4fff3;
        border-radius: 30px;
    }

    label {
        margin: 5px;
        display: inline-block;
        color: #aaa;
        font-size: 14px;
    }

    input {
        border: none;
        width: 60%;
        padding: 4px;
        border-radius: 4px;
    }

    .btn {
        margin-top: 20px;
        padding: 8px;
        border: none;
        background-color: black;
        color: #aaa;
    }

    .btn:hover {
        margin-top: 20px;
        padding: 8px;
        border: none;
        background-color: rgb(97, 97, 97);
        color: #aaa;
    }

    .good {
    border: 4px solid greenyellow;
}

    .bad {
        border: 1px solid red;
    }
</style>

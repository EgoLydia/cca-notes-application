<template>
  <div>
    <form>
        <label>Firstname:</label><br>
        <input v-model="text" required /><br>

        <label>Lastname:</label><br>
        <input v-model="text" required /><br>

        <label>Email:</label><br>
        <input v-model="email" required /><br>

        <label>Password:</label><br>
        <input v-model="password" required /><br>

        <label>Confirm Password:</label><br>
        <input v-model="password" required /><br>

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
    }
  },

  methods: {
    
  }
};
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
</style>

<template>
  <form @submit="submitForm">
    <label>Username:</label><br />
    <input v-model="username" required /><br />

    <label>Email:</label><br />
    <input v-model="email" required /><br />

    <label>Password:</label><br />
    <input
      v-model="password"
      type="password"
      :class="[inputBorder ? 'good' : 'bad']"
      required
    /><br />

    <label>Confirm Password:</label><br />
    <input v-model="confirmPassword" type="password" required /><br />

    <button class="btn" type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  computed: {
    inputBorder() {
      if (this.password.length > 2 && this.password.length < 10) {
        return true;
      } else {
        return false;
      }
    },
  },

  // methods: {
  //   submitForm() {
  //       this.$router.push(this.username + this.email + this.password)
  //     }
  //   }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 100px auto;
  background-color: #e4fff3;
  border-radius: 30px;
  padding: 20px;
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
  background-color: #2f7254;
  color: rgb(231, 231, 231);
  border-radius: 5px;
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
  border: 1px solid rgb(254, 185, 185);
}

@media (min-width: 768px) {
  form {
    margin-top: 150px;
  }
}
</style>

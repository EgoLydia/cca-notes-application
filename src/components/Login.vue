<template>
  <div>
    <form @submit.prevent="submitForm">
      <input
        v-model="email"
        placeholder="Email"
        type="email"
        required
      /><br /><br />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        :class="[inputBorder ? 'good' : 'bad']"
        required
      /><br />
      <button class="btn" type="submit">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
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

  methods: {},
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 100px auto;
  background-color: #e4fff3;
  border-radius: 30px;
  padding: 20px;
  text-align: center;
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

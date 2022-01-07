<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form class="col-4" @submit.prevent="loginUser()">
        <h2>Login</h2>

        <div class="form-group">
          <label for="usernameInput">Username</label>
          <input
            type="text"
            class="form-control"
            id="usernameInput"
            v-model="user.username"
          />
        </div>

        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input
            type="password"
            class="form-control"
            id="passwordInput"
            v-model="user.password"
          />
        </div>

        <button type="submit" class="btn btn-primary mt-3">Login</button>
      </form>
    </div>

    <div class="row justify-content-md-center mt-3">
      <router-link to="/signup">signup</router-link>
    </div>
  </div>
</template>

<script>
import { login } from '../services/user.service';

export default {
  name: 'Login',
  data() {
    return {
      skills: [],
      addedSkills: [],
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      const user = {
        ...this.user,
      };
      const response = await login({
        username: user.username,
        password: user.password,
      });
      if (response) {
        this.$router.push({ name: 'Home' });
      }
    },
  },
  mounted() {},
};
</script>


<style scoped>
</style>
<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form class="col-4" @submit.prevent="signup()">
        <h2>Register new user!</h2>

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

        <SkillsList
          :skills="skills"
          @addSkill="addSkill"
          @removeSkill="removeSkill"
        />

        <button type="submit" class="btn btn-primary mt-3">Signup</button>
      </form>
    </div>

    <div class="row justify-content-md-center mt-3">
      <router-link to="/login">login</router-link>
    </div>
  </div>
</template>

<script>
import SkillsList from '../components/SkillsList.vue';
import { getAllSkills } from '../services/skill.service';
import { signup, login } from '../services/user.service';

export default {
  name: 'Signup',
  components: {
    SkillsList,
  },
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
    async getSkills() {
      const skills = await getAllSkills();
      this.skills = skills.map((skill) => {
        return {
          ...skill,
          selected: false,
        };
      });
    },
    addSkill(skill) {
      this.addedSkills.push(skill);
    },
    removeSkill(skillId) {
      this.addedSkills = this.addedSkills.filter(
        (skill) => skill._id !== skillId
      );
    },
    async signup() {
      const user = {
        ...this.user,
        skills: this.addedSkills,
      };
      const createdUser = await signup(user);
      if (createdUser) {
        const response = await login({
          username: user.username,
          password: user.password,
        });
        if (response) {
          this.$router.push('/');
        }
      }
    },
  },
  mounted() {
    this.getSkills();
  },
};
</script>


<style scoped>
</style>
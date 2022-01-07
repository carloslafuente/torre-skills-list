<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form class="col-4" @submit.prevent="signup()">
        <h2>Welcome!</h2>

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
  </div>
</template>

<script>
import SkillsList from '../components/SkillsList.vue';
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
    getSkills() {
      const skills = [
        {
          _id: '61d78133c036f438389a8901',
          name: 'frontend',
          description: 'Frontend developer',
        },
        {
          _id: '61d782a059cf8ab9874c5158',
          name: 'backend',
          description: 'Backend developer',
        },
      ];
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
    signup() {
      const user = {
        ...this.user,
        skills: this.addedSkills,
      };
      console.log(user);
    },
  },
  mounted() {
    this.getSkills();
  },
};
</script>


<style scoped>
</style>
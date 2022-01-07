<template>
  <div class="mt-3">
    <template v-for="skill in skills" :key="skill._id">
      <span
        class="badge rounded-pill"
        :class="skill.selected ? 'bg-success mx-1' : 'bg-secondary mx-1'"
        @click="toggleSkill(skill._id)"
      >
        {{ skill.name }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SkillsList',
  props: { skills: Array },
  methods: {
    toggleSkill(skillId) {
      this.skills.find((skill) => {
        if (skill._id === skillId) {
          skill.selected = !skill.selected;
          skill.selected
            ? this.$emit('addSkill', skill)
            : this.$emit('removeSkill', skillId);
        }
      });
    },
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
</style>

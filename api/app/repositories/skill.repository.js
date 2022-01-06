const SkillSchema = require('../schemas/skill.schema');
const { encrypt, isMatch } = require('../shared/helpers/bcryptPassword.helper');
const mongoose = require('mongoose');

const getSkills = async () => {
  const skillRepository = mongoose.model('Skill', SkillSchema);
  const skills = await skillRepository.find({});
  return skills;
};

const postSkill = async (skill) => {
  const skillRepository = mongoose.model('Skill', SkillSchema);
  const createdSkill = await new skillRepository({
    name: skill.name,
    description: skill.description,
  }).save();
  return createdSkill;
};

module.exports = {
  getSkills,
  postSkill,
};

const Skill = require('../schemas/skill.schema');

const getSkills = async () => {
  const skillRepository = Skill;
  const skills = await skillRepository.find({});
  return skills;
};

const postSkill = async (skill) => {
  const skillRepository = Skill;
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

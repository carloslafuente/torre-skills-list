const { getSkills, postSkill } = require('../repositories/skill.repository');

const getAllSkills = async () => {
  return await getSkills();
};

const createSkill = async (skill) => {
  return await postSkill(skill);
};

module.exports = {
  getAllSkills,
  createSkill,
};

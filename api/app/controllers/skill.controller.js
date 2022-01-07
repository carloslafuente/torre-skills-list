const { getAllSkills, createSkill } = require('../services/skill.service');

async function apiGET(req, res) {
  try {
    const skills = await getAllSkills();
    return res.status(200).send({ data: skills });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

async function apiPOST(req, res) {
  try {
    const newSkill = req.body;
    const skill = await createSkill(newSkill);
    return res.status(201).send({ data: skill });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

module.exports = {
  apiGET,
  apiPOST,
};

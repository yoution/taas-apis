/**
 * This service provides operations of Skill.
 */
const Joi = require('joi')
const helper = require('../common/helper')

/**
 * Search skills
 * @param {Object} criteria the search criteria
 * @returns {Object} the search result, contain total/page/perPage and result array
 */
async function createPayment (criteria) {
  return helper.getTopcoderSkills(criteria)
}

searchSkills.schema = Joi.object().keys({
  criteria: Joi.object().keys({
    projectId: Joi.number().integer().required(),
    userHandle: Joi.string().required(),
    amount: Joi.number().min(0).required(),
    name: Joi.string(),
    description: Joi.string(),
  }).required()
}).required()

module.exports = {
  searchSkills
}

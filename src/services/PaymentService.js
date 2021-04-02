/**
 * This service provides operations of Skill.
 */
const Joi = require('joi')
const config = require('config')
const _ = require('lodash')
const helper = require('../common/helper')

/**
 * Search skills
 * @param {Object} options the createPayment options
 */
async function createPayment (options) {
  const newChallenge = {
    status: "Draft", 
    name: options.name,
    projectId: options.projectId,
    typeId: config.TYPE_ID_TASK || "ecd58c69-238f-43a4-a4bb-d172719b9f31", 
    trackId: config.DEFAULT_TRACK_ID || "9b6fc876-f4d9-4ccb-9dfd-419247628825", 
    startDate: "2021-03-29T20:38:54.122Z", 
    descriptionFormat: "markdown", 
    description: "** taas payment test 011", 
    timelineTemplateId": "53a307ce-b4b3-4d6f-b9a1-3741a58f77e6", 
    legacy: {
        "pureV5Task": true 
    },
    prizeSets: [
        {
            prizes: [
                {
                    "type": "USD", 
                    "value": options.amount 
                }
            ],
            type: "placement" 
        }
    ],
    // billing: {
    //     billingAccountId: 80000069 
    // },
    tags: ["Other"] 
  };
  if (options.billingAccountId) {
    _.set(newChallenge, 'billing.billingAccountId', options.billingAccountId)
    
  }

  // Create a new challenge
  const challengeUUID = await helper.createChallenge(newChallenge);

  // adding user as registrants
  await helper.assignUserAsRegistrant(copilot.handle, challengeUUID);

  // active challenge
  await helper.activateChallenge(challengeUUID);
  logger.debug(`updating database payment with new challenge id:${challengeUUID}`);
    logger.debugWithContext(`Closing challenge with winner ${assigneeMember.topcoderUsername}(${winnerId})`, event, issue);
    await topcoderApiHelper.closeChallenge(dbIssue.challengeUUID, winnerId, assigneeMember.topcoderUsername);
}

searchSkills.schema = Joi.object().keys({
  criteria: Joi.object().keys({
    projectId: Joi.number().integer().required(),
    userHandle: Joi.string().required(),
    amount: Joi.number().min(0).required(),
    billingAccountId: Joi.number().integer(),
    name: Joi.string(),
    description: Joi.string(),
  }).required()
}).required()

module.exports = {
  searchSkills
}

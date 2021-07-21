/**
 * mapping emsi skills to topcoder skills
 */

const logger = require('../../src/common/logger')
const helper = require('../../src/common/helper')
const fs = require('fs')
async function mappingSkill() {
  const matchedSkills = {}
  const unMatchedSkills = {}
  let tcSkills
  try {
    tcSkills = await helper.getAllTopcoderSkills()
  } catch (e) {
    console.log('error', e)
    /* handle error */
  }

  unMatchedSkills[tcSkills[0].name] = tcSkills[0]
  matchedSkills[tcSkills[2].name] = tcSkills[2]
  // for(let i = 0; i < 10 ||tcSkills.length; i++) {
  //   const tcSkill = tcSkills[i]
  //   const emsiTags = await helper.getTags(tcSkill.name)
  //   if (emsiTags.length) {
  //     matchedSkills[emsiTags[0].tag] = tcSkill
  //   }else {
  //     unMatchedSkills[tcSkill.name] = tcSkill
  //   }
  // }
  const textString = `module.exports = { matchedSkills: ${JSON.stringify(matchedSkills, 2, 3)}, unMatchedSkills: ${JSON.stringify(unMatchedSkills, 2, 2)} }`

  fs.writeFileSync(__dirname + '/esmi-skills-mapping.js', textString)

}
mappingSkill()



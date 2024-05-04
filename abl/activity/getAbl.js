const activityDao = require("../../dao/activity-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch(`/activity/get?id=fb5313e97f39f4178b4413841298c964`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
*/

const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
  },
  required: ["id"],
  additionalProperties: false,
};

async function getAbl(req, res) {
  try {
    const reqParams = req.query?.id ? req.query : req.body;
    
    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const activityId = reqParams.id;
    const activity = activityDao.get(activityId);
    if (!activity) {
      return res.status(404).json({ message: `Activity with ID ${activityId} not found` });
    }

    res.json(activity);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = getAbl;

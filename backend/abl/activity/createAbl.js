const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);
const validateActivity = require("../../helpers/validate-activity.js");
ajv.addFormat("activity", { validate: validateActivity });
const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const activityDao = require("../../dao/activity-dao.js");

/*
fetch('/activity/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    date: "2021-01-01T00:00:00Z",
    type: "care",
    amount: 1,
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

const acitivitySchema = {
  type: "object",
  properties: {
    date: { type: "string", format: "date-time" },
    type: { type: "string", format: "activity" },
    unit: { type: "string" },
    amount: { type: "number" },
  },
  required: ["date"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    let activity = req.body;

    const valid = ajv.validate(acitivitySchema, activity);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    activity.date = new Date().toISOString();

    activity = activityDao.create(activity);
    res.json(activity);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;

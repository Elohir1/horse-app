const planDao = require("../../dao/plan-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);
const validatePlan = require("../../helpers/validate-plan.js");
ajv.addFormat("plan", { validate: validatePlan });
const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

/*
fetch('/plan/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id:'669db9676fac9b170b88eb8d89c12eea',
    name: "First month",
    date: "2021-01-01T00:00:00Z",
    desc: "Jarní forma",
    trackableActivities: [
      {
        type: "feed",
        unit: "kg",
        amount: 30,
      },
      {
        type: "walk",
        amount: 5,
      },
      {
        type: "care",
        amount: 2,
      },
    ],
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

const planSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    date: { type: "string", format: "date-time" },
    name: { type: "string", minLength: 3 },
    desc: { type: "string" },
    trackableActivities: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        properties: {
          type: { type: "string", format: "plan" },
          unit: { type: "string" },
          amount: { type: "number" },
        },
        required: ["type", "amount"],
        additionalProperties: false,
      },
    },
  },
  required: ["date", "name", "trackableActivities"],
  additionalProperties: false,
};

async function updateAbl(req, res) {
  try {
    const reqParams = req.body;

    const valid = ajv.validate(planSchema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }
    const planId = reqParams.id;
    const planData = reqParams;

    const existingPlan = planDao.get(planId);
    if (!existingPlan) {
      return res
        .status(404)
        .json({ message: `Plan with ID ${planId} not found` });
    }

    const updatedPlan = planDao.update(planData);
    if (!updatedPlan) {
      return res
        .status(500)
        .json({ message: `Failed to update plan with ID ${planId}` });
    }

    res.json(updatedPlan);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;

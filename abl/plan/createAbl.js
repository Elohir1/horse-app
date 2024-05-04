const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);
const validatePlan = require("../../helpers/validate-plan.js");
ajv.addFormat("plan", { validate: validatePlan });
const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const planDao = require("../../dao/plan-dao.js");

/*
fetch("/plan/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
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
    ],
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });
*/

const planSchema = {
  type: "object",
  properties: {
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
          amount: { type: "number" }
        },
        required: ["type", "amount"],
        additionalProperties: false
      }
    }
  },
  required: ["date", "name", "trackableActivities"],
  additionalProperties: false
};

async function CreateAbl(req, res) {
  try {
    let plan = req.body;

    const valid = ajv.validate(planSchema, plan);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    plan.date = new Date().toISOString();

    plan = planDao.create(plan);
    res.json(plan);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;

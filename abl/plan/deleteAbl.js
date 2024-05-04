const planDao = require("../../dao/plan-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch('/plan/delete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: '5d2153e12df8495c7a43fbe8798c9e12',
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
    id: { type: "string", minLength: 32, maxLength: 32 },
  },
  required: ["id"], // ID povinné pro identifikaci a aktualizaci
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
    const planData = {
      id: planId,
      name: reqParams.name,
      breed: reqParams.breed,
      age: reqParams.age,
    };

    const existingPlan = planDao.get(planId);
    if (!existingPlan) {
      return res.status(404).json({ message: `Plan with ID ${planId} not found` });
    }

    const updatedPlan = planDao.update(planData);
    if (!updatedPlan) {
      return res.status(500).json({ message: `Failed to update plan with ID ${planId}` });
    }

    res.json(updatedPlan);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;

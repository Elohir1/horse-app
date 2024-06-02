const activityDao = require("../../dao/activity-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch('/activity/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: '6c95a5bba693ad0360a1cfb72f147cd7',
    date: "2021-01-01T00:00:00Z",
    type: "feed",
    unit: "kg",
    amount: 2
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

const activitySchema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
    date: { type: "string", format: "date-time" },
    type: { type: "string" },
    unit: { type: "string" },
    amount: { type: "number" },
  },
  required: ["id"], // ID povinné pro identifikaci a aktualizaci
  additionalProperties: false,
};

async function updateAbl(req, res) {
  try {
    const reqParams = req.body;

    const valid = ajv.validate(activitySchema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }
    const activityId = reqParams.id;
    const activityData = {
      id: activityId,
      name: reqParams.name,
      breed: reqParams.breed,
      age: reqParams.age,
    };

    const existingActivity = activityDao.get(activityId);
    if (!existingActivity) {
      return res
        .status(404)
        .json({ message: `Activity with ID ${activityId} not found` });
    }

    const updatedActivity = activityDao.update(activityData);
    if (!updatedActivity) {
      return res
        .status(500)
        .json({ message: `Failed to update activity with ID ${activityId}` });
    }

    res.json(updatedActivity);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;

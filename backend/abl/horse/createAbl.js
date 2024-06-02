const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch('/horse/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Horse Name',
    breed: 'Horse Breed',
    age: 5
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

const horseDao = require("../../dao/horse-dao.js");

const horseSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    breed: { type: "string" },
    age: { type: "number" },
  },
  required: ["name"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    let horse = req.body;

    const valid = ajv.validate(horseSchema, horse);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    horse = horseDao.create(horse);
    res.json(horse);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;

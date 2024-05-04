const horseDao = require("../../dao/horse-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch('/horse/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: '118aca23f1833ab64e99f498ebe95718',
    name: 'Satanův milášek',
    breed: 'Démonický kůň',
    age: 666
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
*/

const horseSchema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
    name: { type: "string", },
    breed: { type: "string", },
    age: { type: "number" },
  },
  required: ["id"], // ID povinné pro identifikaci a aktualizaci
  additionalProperties: false,
};

async function updateAbl(req, res) {
  try {
    const reqParams = req.body;

    const valid = ajv.validate(horseSchema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }
    const horseId = reqParams.id;
    const horseData = {
      id: horseId,
      name: reqParams.name,
      breed: reqParams.breed,
      age: reqParams.age,
    };

    const existingHorse = horseDao.get(horseId);
    if (!existingHorse) {
      return res.status(404).json({ message: `Horse with ID ${horseId} not found` });
    }

    const updatedHorse = horseDao.update(horseData);
    if (!updatedHorse) {
      return res.status(500).json({ message: `Failed to update horse with ID ${horseId}` });
    }

    res.json(updatedHorse);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;

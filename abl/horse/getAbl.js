const horseDao = require("../../dao/horse-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch(`/horse/get?id=118aca23f1833ab64e99f498ebe95718`)
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

    const horseId = reqParams.id;
    const horse = horseDao.get(horseId);
    if (!horse) {
      return res.status(404).json({ message: `Horse with ID ${horseId} not found` });
    }

    res.json(horse);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = getAbl;

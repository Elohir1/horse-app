const horseDao = require("../../dao/horse-dao.js");
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

/*
fetch('/horse/delete', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 'ca72a3204a23e2b3895a0f9b8c006268',
  }),
})
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

async function deleteAbl(req, res) {
  try {
    const reqParams = req.body;

    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const horseExists = horseDao.get(reqParams.id);
    if (!horseExists) {
      return res
        .status(404)
        .json({ message: `Horse with ID ${horseId} not found` });
    }

    const isDeleted = horseDao.remove(horseId);
    if (!isDeleted) {
      return res
        .status(500)
        .json({ message: `Failed to delete horse with ID ${horseId}` });
    }

    res.status(200).json({ message: `Horse with ID ${horseId} deleted` });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = deleteAbl;

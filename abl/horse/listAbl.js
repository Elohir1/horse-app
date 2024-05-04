const horseDao = require("../../dao/horse-dao.js");

async function listAbl(req, res) {
  try {
   const horseList = horseDao.list();
    res.json(horseList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = listAbl;

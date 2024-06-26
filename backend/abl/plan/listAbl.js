const planDao = require("../../dao/plan-dao.js");

async function listAbl(req, res) {
  try {
    const planList = planDao.list();
    res.json(planList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = listAbl;

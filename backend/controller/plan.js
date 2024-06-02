const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/plan/getAbl");
const ListAbl = require("../abl/plan/listAbl");
const CreateAbl = require("../abl/plan/createAbl");
const UpdateAbl = require("../abl/plan/updateAbl");
const DeleteAbl = require("../abl/plan/deleteAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

/*router.get("/listAvailableActivities", () => POLE)
pro pridani listu na vyber
*/

module.exports = router;

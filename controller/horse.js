const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/horse/getAbl");
const ListAbl = require("../abl/horse/listAbl");
const CreateAbl = require("../abl/horse/createAbl");
const UpdateAbl = require("../abl/horse/updateAbl");
const DeleteAbl = require("../abl/horse/deleteAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;

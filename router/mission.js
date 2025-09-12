const express = require("express");
const router = express.Router();
const missionsController = require("../controller/missionsController");
const { authTokenAsso } = require("../middlware/Auth");

router.get("/missions", missionsController.getMission);

router.post("/mission", authTokenAsso, missionsController.postMission);

router.patch("/mission/:id", authTokenAsso, missionsController.patchMission);

router.delete("/mission/:id", authTokenAsso, missionsController.deleteMission);

module.exports = router;

const express = require("express");
const router = express.Router();
const missionsController = require("../controller/missionsController");


router.get("/missions", missionsController.getMission);
// router.post("/addMission",missionController.postMission);

module.exports = router; 
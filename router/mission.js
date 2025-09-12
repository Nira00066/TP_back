const express = require("express");
const router = express.Router();
const missionsController = require("../controller/missionsController");

router.get("/missions", missionsController.getMission);

router.post("/mission", missionsController.postMission);

router.patch("/mission/:id", missionsController.patchMission);

router.delete("/mission/:id", missionsController.deleteMission);

module.exports = router;

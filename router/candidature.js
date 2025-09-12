const express = require("express");
const router = express.Router();
const candidature = require("../controller/candidatureController");
const { authTokenBenevole, authTokenAsso } = require("../middlware/Auth");

router.post(
  "/candidature/mission/:id",
  authTokenBenevole,
  candidature.postCandidature
);

router.post("candidature/:id", authTokenAsso,candidature.postAnswerCandidature);
router.get("/candidatures",authTokenAsso,candidature.getcandidature)

module.exports = router;

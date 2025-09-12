// faire la connexion
const express = require("express");
const router = express.Router();
const UserController = require("../controller/loggerController");

router.post("/", UserController.logger);


module.exports = router; 
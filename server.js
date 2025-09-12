const express = require("express");
const db = require("./db/connectDB");
const missionsRoute = require("./router/mission");
const authLogge = require("./router/user");
const app = express();
app.use(express.json());


app.use("/", missionsRoute);

// http://localhost:3000/missions
// http://localhost:3000/mission
// http://localhost:3000/mission/4

app.use("/connexion", authLogge);
// http://localhost:3000/connexion/


app.listen(3000, () => db(), console.log(" Server lancer"));

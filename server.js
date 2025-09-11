const express = require("express");
const db = require("./db/connectDB");
const app = express();
app.use(express.json());

// app.use('/',missionsRoute);



app.listen(3000, () => db(), console.log(" Server lancer"));

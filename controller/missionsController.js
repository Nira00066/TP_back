const db = require("../db/connectDB");

exports.getMission = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM missions");
    res.status(201).json(rows);
  } catch (err) {
    res.status(505).send("ERREUR:" + err.message);
  }
};

exports.postMission = async (req, res) => {
  const { titre, description, date } = req.body;

  if (!titre || !date || !description) {
    return res
      .status(400)
      .json({ error: "Tittre, description et date requis" });
  }
  //    a regarde pour plus tard pour verifier la date n'est pas dans le passer
  try {
    await db.execute(
      "INSERT INTO missions(title,descrip_Mission,date_missions)VALUES(?,?)",
      [titre, description, date]
    );
    res.status(201).json({ message: "mission crée" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "erreur" });
  }
};

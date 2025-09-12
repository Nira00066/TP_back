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
  // voire pour ne pas oublier d'ajouter l'id de l'assos
  // ! une benevole ne peux pas crée !
  if (!titre || !date || !description) {
    return res
      .status(400)
      .json({ error: "Tittre, description et date requis" });
  }
  //    a regarde pour plus tard pour verifier la date n'est pas dans le passer
  try {
    await db.execute(
      "INSERT INTO missions(title,descrip_Mission,date_mission)VALUES(?,?,?)",
      [titre, description, date]
    );
    res.status(201).json({ message: "mission crée" });
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ message: "erreur serveur", error: err.message });
  }
};

exports.patchMission = async (req, res) => {
  //  on peut modifier la mission uniquement si tu ton id_user = a ton id
  // en plus de faire partis des assoss

  const id = parseInt(req.params.id);
  console.log(id);
  // on recupere l'id
  const { titre, description, date } = req.body;
  // veririfer que ton titre , desciption et date n'est pas vide
  if (!titre || !description || !date) {
    return res
      .status(400)
      .json({ message: "titre ou description ne peut être vide" });
  }
  console.log("1");

  // faire apres une condition que la date ne peut etre dans la passer
  const [result] = await db.execute(
    "UPDATE missions SET title = ?,descrip_Mission = ?, date_mission = ? WHERE id = ?",
    [titre, description, date, id]
  );

  // si affected Row =0  aucune ligne modifiée ,id n’existe pas ou valeurs identiques à ce qui est déjà en BDD.
  if (result.affectedRows === 0) {
    return res
      .status(404)
      .json({ message: "Mission non trouvée ou pas de changement" });
  }
  res.json({ message: "Mission mise à jour avec succès" });
};

exports.deleteMission = async (req, res) => {
  //  Faire attention on FK des user
  try {
    const id = req.params.id;
    const [result] = await db.execute("DELETE FROM missions WHERE id = ?", [
      id,
    ]);
    console.log(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "mission non trouvé" });
    }
    res.json({ message: "Mission Supp" });
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ message: "erreur serveur", error: err.message });
  }
};

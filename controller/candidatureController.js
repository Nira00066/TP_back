const db = require("../db/connectDB");

exports.postCandidature = async (req, res) => {
  const missionId = req.params.id;
  // donc id de ta missions
  const userId = req.user.id;
  // et id de ton user que tu auras garce aton auth

  try {
    const [existing] = await db.execute(
      "SELECT * FROM candidature WHERE id_user= ? AND id_mission = ?",
      [missionId, userId]
    );
    if (existing.length > 0) {
      return res
        .status(400)
        .json({ message: "Vous avez déja postulé à cette mission." });
    }
    await db.execute(
      "INSERT INTO candidature (id_user, id_mission, date_candidature) VALUES (?, ?, NOW())",
      [userId, missionId]
    );
    res.status(201).json({ message: "Candidature envoyée avec succès !" });
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ message: "erreur serveur", error: err.message });
  }
};

exports.postAnswerCandidature = async (req, res) => {
  const candidatureId = req.params.id;
  const { answer } = req.body;
  const userId = req.user.id;

  try {
    // veririfie que cette candidature 4 exister dans la bd
    const [existing] = await db.execute(
      "SELECT candidature.id, candidature.id_mission, missions.id_user AS creator_id FROM candidature INNER JOIN missions ON candidature.id_mission = missions.id WHERE candidature.id = ?",
      [candidatureId]
    );
    // si pas exister trow err
    if (existing.length === 0) {
      return res.status(404).json({ message: "Candidature non trouvée" });
    }

    const candidature = existing[0];

    //  verirification que l'id de la candidature  = a l'id de connexion
    if (candidature.creator_id !== userId)
      return res.status(400).json({
        message: " Accès refusé , vous n'êtes pas le createur de la mission",
      });
    //  changement de status
    if (!["acceptee", "refusee"].includes(answer)) {
      return res.status(400).json({ message: "Status invalide" });
    }
    // et envoie de changement du status
    await db.execute("UPDATE candidature SET status = ? WHERE id = ?", [
      answer,
      candidatureId,
    ]);

    res.status(200).json({ message: "Candidature ${answer} avec succès !" });
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ message: "erreur serveur", error: err.message });
  }
};

exports.getcandidature = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM missions");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Erreur SQL :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

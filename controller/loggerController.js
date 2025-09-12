const jwt = require("jsonwebtoken");
const db = require("../db/connectDB");
const bcrypt = require("bcrypt");

exports.logger = async (req, res) => {
  const { email, password } = req.body;
  // on recupere email password

  if (!email || !password) {
    return res.status(400).json({ message: "email et password requis" });
    // on verrifie qu'il y a les deux
    
  }
  console.log("1");

  try {
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ message: "utilisateur non trouvé" });
    }
    console.log("1");
    const user = rows[0];

    console.log("2");

    const isPasswordValid = await bcrypt.compare(
      password,
      user.hashed_password
    );
    console.log("1");

    // ! hashed_password
    // ? doit etre dans la table user

    if (!isPasswordValid) {
      return res.status(400).json({ message: "mot de passe incorrect" });
    }
    console.log("1");

    if (!process.env.JWT_SECRET) {
      res
        .status(400)
        .json({ message: "JWT non definis dans ton .env ou import oublier" });
    }
    console.log("1");

    const token = jwt.sign(
      { id: user.id, type: user.type, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("1");

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "erreur server" });
  }
};

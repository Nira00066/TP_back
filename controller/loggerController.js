const { jwt } = require("jsonwebtoken");
const db = require("../db/connectDB");

exports.logger = async (req, res) => {
  const { email, password } = req.body;
  // on recupere email password

  if (!email || !password) {
    return res.status(400).json({ message: "email et password requis" });
    // on verrifie qu'il y a les deux
  }
  try {
    const [row] = await db.execute("SELECT * FROM user WHERE email ?", [email]);
    if (row.length === 0) {
      return res.status(400).json({ message: "utilisateur non trouvé" });
    }
    const user = row[0];

    const isPasswordValid = await bcrypt.compare(
      password,
      user.hashed_password
    );
    // ! hashed_password
    // ? doit etre dans la table user

    if (!isPasswordValid) {
      return res.status(400).json({ message: "mot de passe incorrect" });
    }
    if (!process.env.JWT_SECRET) {
      res
        .status(400)
        .json({ message: "JWT non definis dans ton .env ou import oublier" });
    }

    const token = jwt.sign(
      { id: user.id, type: user.type, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "erreur server" });
  }


};

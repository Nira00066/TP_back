const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

function authTokenAsso(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401).json({ message: "Non connecté" });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401).json({ message: "Erreur token " });
    }
    if (user.type !== "association")
      return res.status(403).json({ message: "Accès réservé aux Association" });
    req.user = user;
    next();
  });
}
function authTokenBenevole(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Non connecté" });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Erreur token " });
    }
    if (user.type !== "benevole")
      return res.status(403).json({ message: "Accès réservé aux benevole" });
    req.user = user;
    next();
  });
}

module.exports = { authTokenAsso, authTokenBenevole };

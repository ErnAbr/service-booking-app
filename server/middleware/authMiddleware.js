const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = decoded;
    next();
  } catch {
    return res.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;

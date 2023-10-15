const jwt = require("jsonwebtoken");
const usermodel = require('../model/users')

const config = process.env;


const checkrole = (req, res, next) => {
    try {
    
      if (req.user && req.user.role === "admin") {
        res.status(200)
        return next();
      }
    } catch (error) {
      res.status(403).send(`you are not athourized you need to be an admin`);
      console.log(error);
    }
  };



const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Please provide a token");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {checkrole, verifyToken};
const userdb = require("../models");
const userModel = userdb.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const signUp = async (req, res) => {
  const Newuser = req.body;
  const token = jwt.sign(
    { email: Newuser.email, id: Newuser.id },
    process.env.JWT_SECRET
  );
  try {
    const existingUser = await userModel.findOne({
      where: { email: Newuser.email }
    });

    if (existingUser) {
      res.send("user exist already");
    } else {
      const User = await userModel.create(Newuser);
      return res.status(201).json({
        message: "user successfully created",
        User,
        token

    })
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user.");
  }
};

const logIn = async (req, res) => {
  const loginDetails= req.body;
  if (!(loginDetails.email && loginDetails.password)) {
    res.status(400).send("email or password required")
}

const user = await userModel.findOne({
    where: { email: loginDetails.email }

}); 

if (!user) {
    return res.status(404).json({
        message: "This user does not exist",

    })
  }

  // const validPassword = await user.validPassword(loginDetails.password)
    

  // if (!validPassword) {
  //     return res.status(422).json({
  //         message: "wrong email or password",
          
  //     })
  // }
 

  const token = jwt.sign({ email: user.email, id: user.id}, 
      process.env.JWT_SECRET, 
      { expiresIn: "2h" })
      
  
      return res.status(201).json({
          message: "successfully logged in",
          user,
          token
      })
 
};
module.exports = { signUp, logIn };

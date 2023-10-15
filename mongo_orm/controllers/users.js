const userModel = require("../model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

//signup logic

const SignupUser = async (req, res) => {
  try {
    const userFromRequest = req.body;
    console.log(userFromRequest);
    const existingUser = await userModel.findOne({
      email: userFromRequest.email
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exist"
      });
    }
    const user = await userModel.create({
      Name: userFromRequest.Name,
      email: userFromRequest.email,
      password: userFromRequest.password,
      role: userFromRequest.role
    });

    const token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    user.token = token;
    
    return res.status(201).json({
      message: "User created successfully",
      user,
      token
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      data: null
    });
  }
};

//login logic

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("email and password field required");
    }

    const user = await userModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h"
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { SignupUser, loginUser };

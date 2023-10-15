const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const itemRoute = require("./routes/item");
const userRoute = require("./routes/user");
require("dotenv").config();
const sequelize = require("./config/sequelize");

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());

app.use("/user", userRoute);
app.use("/item", itemRoute);
sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app started on ${PORT}`);
      console.log("successfully coonnected to db");
    });
  })
  .catch((error) => {
    console.log(error);
    console.log(`error connecting to the database`);
  });

const express = require("express");
const app = express();
const passport = require("./auth");

const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
//const person = require('./models/personSchema');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//Middlwire funcn
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to :${req.originalUrl}`
  );
  next(); //Moveon to the next phase
};
//adding logfunction to the Appplication

app.use(logRequest);

app.use(passport.initialize());

const Authenticate = passport.authenticate("local", { session: false });

// fix db connection event listner not working

app.get("/", Authenticate, (req, res) => {
  res.send("welcome to my hotel sir");
});

app.get("/Idli", (req, res) => {
  let customIdli = {
    name: "OPIdli",
    size: "Large",
    flavour: ["cocolate", "vanila", "strowbarry"],
  };
  res.send(customIdli);
});

const personRout = require("./routs/personRouts");
const menuRout = require("./routs/menuRouts");

// app.use("/menu",logRequest, menuRout);  - can use only specific endpoints
app.use("/menu", menuRout);
app.use("/", personRout);

app.listen(PORT, () => {
  console.log(` server listinig on 3002`);
});

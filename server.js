const express = require("express");
const app = express();

const db = require("./db");

const bodyParser = require("body-parser");
//  const person = require('./models/personSchema');
app.use(bodyParser.json());

// fix db connection event listner not working

app.get("/", (req, res) => {
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

app.use("/", personRout);
app.use("/menu", menuRout);
app.listen(3001, () => {
  console.log(` server listinig on 3001`);
});

//comment added

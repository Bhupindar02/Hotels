const express = require("express");
const route = express.Router();
const person = require("../models/personSchema");

route.post("/person", async (req, res) => {
  const data = req.body;
  try {
    const newPerson = new person(data);

    const responce = await newPerson.save();
    console.log("data has been saved");
    res.status(200).json(responce);
  } catch (err) {
    console.log("data has been saved");
    res.status(500).json("internal server error");
  }
});

//person get method
route.get("/person", async (req, res) => {
  try {
    const personData = await person.find();
    console.log("data fatched");
    res.status(200).json(personData);
  } catch (err) {
    console.log("data not showing");
    res.status(500).json("internal server error" + err);
  }
});

//parameterised api call for person
route.get("/person/:work", async (req, res) => {
  try {
    const workType = req.params.work; //work will extract from URL
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const responce = await person.find({ work: workType });
      console.log("work params fetched");
      res.status(200).send(responce);
    } else {
      res.status(404).send("Invelid workType");
    }
  } catch (err) {
    console.log("invelid input");
    res.status(500).send("Internal server error:" + err);
  }
});

//update person
route.put("/person/:ID", async (req, res) => {
  try {
    const PersonID = req.params.ID;
    const putPerson = req.body;

    const responce = await person.findByIdAndUpdate(PersonID, putPerson, {
      new: true,
      runValidators: true,
    });
    if (!responce) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data has been updated");
    res.status(200).json(responce);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
//delete person document
route.delete("/person/:ID", async (req, res) => {
  try {
    const PersonID = req.params.ID;
    const responce = await person.findByIdAndDelete(PersonID);
    if (!responce) {
      return res.status(404).json({ error: "Person not found" });
    }
    // Send a success message as a JSON response
    res.json({ message: "Person deleted successfully" });
  } catch (err) {
    console.error("Error deleting person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = route;

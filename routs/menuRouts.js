const express = require("express");
const Router = express.Router();

const menu = require("../models/menu");
const { put } = require("./personRouts");

//post endpoint for menuItems
Router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newItem = new menu(data);
    const responce = await newItem.save();
    console.log("data has been saved");
    res.status(200).json(responce);
  } catch (err) {}
});

//menuItem get method
Router.get("/", async (req, res) => {
  try {
    const menuData = await menu.find();
    console.log("data fetched");
    res.status(200).json(menuData);
  } catch (err) {
    console.log("data is no displayed to the Ui");
    res.status(500).json("internal server error" + err);
  }
});
//menu parameterised according to taste
Router.get("/:catagory", async (req, res) => {
  try {
    const foodType = req.params.catagory;
    if (
      foodType == "starter" ||
      foodType == "main course" ||
      foodType == "dessert" ||
      foodType == "beverage"
    ) {
      const responce = await menu.find({ category: foodType });
      console.log("match found for food catagory");
      res.status(200).send(responce);
    } else {
      res.status(404).send("Invelid  food catagory");
    }
  } catch (err) {
    console.log("invelid input");
    res.status(500).send("Internal server error:" + err);
  }
});
//update menu
Router.put("/:ID", async (req, res) => {
  try {
    const itemID = req.params.ID;
    const putItem = req.body;

    const responce = await menu.findByIdAndUpdate(itemID, putItem, {
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

//delete Item
Router.delete("/:ID",async(req,res)=>{
    try{
        const itemID= req.params.ID
        const responce = await menu.findByIdAndDelete(itemID)
        if(!responce){
            res.status(404).json({error:"Person not found"})
        }
        res.status(200).send("Item deleted sucessfully")
    }catch(err){
        console.log(err);
        res.status(500).json({ err: "internal server error" });
    }
})

module.exports = Router;

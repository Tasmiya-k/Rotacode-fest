const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userdata");
const calc = require("./models/calc");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/carbon-f");

app.post("/userapi/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/userapi/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/api/carbon-footprint", async (req, res) => {
  try {
    // Retrieve the latest document from the collection
    const latestData = await calc
      .findOne({})
      .sort({ timestampField: -1 }) // Sort in descending order
      .limit(1); // Limit to 1 document

    // Extract carbon footprint data from the latest document
    const carbonFootprint = {
      personal: latestData.personalCarbonFootprint,
      travel: latestData.travelCarbonFootprint,
      food: latestData.foodCarbonFootprint,
      energy: latestData.energyCarbonFootprint,
      waste: latestData.wasteCarbonFootprint,
      consumption: latestData.consumptionCarbonFootprint,
    };
    console.log(carbonFootprint);
    // Send the carbon footprint data as JSON response
    res.json({ status: "ok", carbonFootprint });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

app.listen(1337, () => {
  console.log("Server has started on port 1337");
});



const express = require("express");
const usemodel = require("./Modle/UseModel.js"); // Corrected spelling: usemodel
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const app = express();
app.use(express.json());

const PORT = 6000;
// app.listen(PORT);
const URL = 'mongodb://127.0.0.1:27017/first'


app.post("/user", async (req, res) => {
  try {

    const hashedpassword =await bcrypt.hash(req.body.Password, 10)
    const userData = new usemodel({ // Corrected spelling: usemodel
      userName: req.body.userName,
      Email: req.body.Email,
      Password: hashedpassword,
      Age: req.body.Age
    });
    const dataSave = await userData.save();

    res.status(201).json({
      ok: true,
      message: "Successful",
      data: dataSave,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/user", async (req, res) => {
  try {
    const getdata = await usemodel.find();

    res.status(200).json({
      count: getdata.length,
      data: getdata
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
mongoose.connect(URL)
app.listen(PORT);

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//cors설정, proxy안됐을 경우에만 해보자
//const cors = require('cors')
//app.use(cors())

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;

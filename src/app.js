const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.get("/frensdata", (req, res) => {
  fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((data) => {
      res.status(200).send(data);
    })
});
app.get("*", (_, res) => {
  res.redirect("/");
});
module.exports = app;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.get("*", (_, res) => {
  res.redirect("/");
});
module.exports = app;

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const DB = require("./database/createtables");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

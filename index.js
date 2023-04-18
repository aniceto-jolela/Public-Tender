const express = require("express");
const { json } = require("express");
const Port = 5000;

const App = express();
App.use(json())

App.listen(Port, () => {
  console.log("Connect success!");
});
const App = require("../config/app");
const empresaController = require("../controllers/empresa.controller");
const Route = App._router;

const express = require('express')
const app = express()
app.use(express.json())

Route.get("/", empresaController.home);
Route.get("/user", empresaController.read);
//Route.post("/user", usuarioController.create);
//Route.post("/content/:id",contentController.update)
//Route.delete("/user/:id", usuarioController.delete);

module.exports = {
  Route,
};
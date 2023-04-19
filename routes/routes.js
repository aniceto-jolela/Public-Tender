const App = require("../config/app");
const companyController = require("../controllers/company.controller");
const Route = App._router;

const express = require('express')
const app = express()
app.use(express.json())

Route.get("/", companyController.home);
Route.get("/companiesReaded", companyController.read);
Route.post("/companyCreated", companyController.create);
Route.post("/companyUpdate/:id",companyController.update)
Route.delete("/companyDeleted/:id",companyController.delete)

module.exports = {
  Route,
};
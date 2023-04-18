require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { Mongoose } = require('../share/mongoose.export');
const { json } = require("express");
const Port = 5000;
const conexao = "mongodb+srv://aniceto:LNDBGN50HsDv4X70@game.y10vqcf.mongodb.net/PublicTender?retryWrites=true&w=majority"

const App = express();
App.use(cors());
App.use(json())


//Mongoose
Mongoose.Promise = global.Promise
Mongoose.connect(conexao).then(() => {
  console.log('Connect db.')
}).catch((error) => {
  console.log('Error ao se conectar. ', error)
})

App.listen(Port, () => {
  console.log("Connect success!");
});

module.exports = App
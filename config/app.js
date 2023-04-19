//require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { Mongoose } = require('../share/mongoose.export');
const { json } = require("express");
const Port = 5000;
const cx = "mongodb+srv://aniceto:LNDBGN50HsDv4X70@game.y10vqcf.mongodb.net/PublicTender?retryWrites=true&w=majority"

const App = express();
App.use(cors());
App.use(json())

//Mongoose
Mongoose.Promise = global.Promise
Mongoose.connect(cx).then(() => {
  console.log('Connected db.')
}).catch((error) => {
  console.log('Error when connecting. ', error)
})

App.listen(Port, () => {
  console.log("Connected server!");
});

module.exports = App
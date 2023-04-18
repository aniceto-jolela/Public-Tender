const { Schema, Mongoose } = require("../share/mongoose.export");

const Empresa = new Schema({
  nome: {
    type: String
  }
});

Mongoose.model("empresas", Empresa);
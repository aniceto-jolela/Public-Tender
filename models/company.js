const { Schema, Mongoose } = require("../share/mongoose.export");

const Company = new Schema({
  name: {
    type: String
  }
});

Mongoose.model("companies", Company);
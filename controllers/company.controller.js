require("../models/company");
const { Mongoose } = require("../share/mongoose.export");
const Companies = Mongoose.model("companies");

module.exports = {
  async home(req, res) {
    return await res.json([{ title: "Wecome Back darling..." }]);
  },
//READ
  async read(req, res) {
    const companiesReaded = await Companies.find();

    return res.json(companiesReaded);
  },
//CREATE
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ error: "Company name is required!" });
    }

    await Companies.create({name});

    return res.status(201).json({message:"Company inserted successfully!"})
  },
//UPDATE
 async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const companyUpdate = await Companies.findOne({ _id: id });

    if (name) {
      companyUpdate.name = name

      await companyUpdate.save();
    }
    return res.status(201).json("record updated!");
  },
//DELETE
  async delete(req, res) {
    const { id } = req.params;

    const companyDeleted = await Companies.findOneAndDelete({ _id: id });

    if (companyDeleted) {
      return res.json(companyDeleted);
    }
    return res
      .status(401)
      .json({ error: "Record not found to delete!" });
  },
};
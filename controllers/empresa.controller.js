require("../models/empresa");
const { Mongoose } = require("../share/mongoose.export");
const Empresas = Mongoose.model("empresas");

module.exports = {
  async home(req, res) {
    return await res.json([{ title: "Wecome Back darling..." }]);
  },
  async read(req, res) {
    const empresasRead = await Empresas.find();

    return res.json(empresasRead);
  },

  async create(req, res) {
    const { nome } = req.body;

    if (!nome) {
      return res
        .status(400)
        .json({ error: "Nome da empresa é obrigatório!" });
    }

    const empresaCreated = await Empresas.create({
      nome,
    });

    return res.json(empresaCreated);
  },

  async delete(req, res) {
    const { id } = req.params;

    const empresaDelete = await Empresa.findOneAndDelete({ _id: id });

    if (empresaDelete) {
      return res.json(empresaDelete);
    }
    return res
      .status(401)
      .json({ error: "Registro não encontrado para deletar!" });
  },
};
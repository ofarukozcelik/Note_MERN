const notModel = require("../models/notModel");
const mongoose = require("mongoose");

const notOlustur = async (req, res) => {
  const { baslik, aciklama } = req.body;
  try {
    const not = await notModel.create({ baslik, aciklama });
    res.status(200).json(not);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const notlarGetir = async (req, res) => {
  const notlar = await notModel.find().sort({ createAt: -1 });
  res.status(200).json(notlar);
};

const notGetir = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).json({ message: "Invalid ID" });

  const not = await notModel.findById(req.params.id);
  return not
    ? res.status(200).json(not)
    : res.status(404).json({ message: "Not Found" });
};

const notSil = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).json({ message: "Invalid ID" });

  const not = await notModel.findOneAndDelete({ _id: req.params.id });
  return not
    ? res.status(200).json(not)
    : res.status(404).json({ message: "Not Found" });
};

const notGuncelle = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).json({ message: "Invalid ID" });

  const not = await notModel.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );

  return not
    ? res.status(200).json(not)
    : res.status(404).json({ message: "Not Found" });
};

module.exports = {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
};

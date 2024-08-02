const express = require("express");
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
} = require("../controllers/notController");

const router = express.Router();

router.get("/", notlarGetir);

//id'li notu getir.
router.get("/:id", notGetir);

//Not ekle.
router.post("/", notOlustur);

//id'li notu sil.
router.delete("/:id", notSil);

//id'li notu güncelle.
router.patch("/:id", notGuncelle);

module.exports = router;

const router = require("express").Router();
const deckController = require("../controllers/deck")

router.post("/agregarCarta", deckController.postAgregarCarta)
router.get("/obtenerCarta", deckController.getObtenerCarta)

module.exports = router
const { Router } = require('express')
const NivelController = require("../controllers/NivelController")

const router = Router()
router
    .get('/niveis', NivelController.pegaTodasOsNiveis)
    .post('/niveis', NivelController.criaNivel)
    .put('/niveis/:id', NivelController.atualizarNivel)
    .delete('/niveis/:id', NivelController.deletarNivel)
    .get('/niveis/:id', NivelController.pegaUmNivel)
module.exports = router
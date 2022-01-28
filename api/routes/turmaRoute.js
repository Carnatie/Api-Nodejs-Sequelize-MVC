const { Router } = require('express')
const TurmaController = require("../controllers/TurmaController")

const router = Router()
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .post('/turmas', TurmaController.criaTurma)
    .put('/turmas/:id', TurmaController.atualizarTurma)
    .delete('/turmas/:id', TurmaController.deletarTurma)
    .post('/turmas/:id/restaura', TurmaController.restaurarTurma)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
module.exports = router
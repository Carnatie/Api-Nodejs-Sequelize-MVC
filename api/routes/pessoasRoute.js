const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController")

const router = Router()
router
    .get('/pessoas', PessoaController.pegarTodasAsPessoas)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .get('/pessoas/:id', PessoaController.pegarUmaPessoa)
module.exports = router
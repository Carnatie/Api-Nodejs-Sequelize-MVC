const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController")

const router = Router()
router
    .get('/pessoas', PessoaController.pegarTodasAsPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegarTodasAsPessoas)
    .post('/pessoas', PessoaController.criarPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restaurarPessoa)
    .get('/pessoas/:id', PessoaController.pegarUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matricula/', PessoaController.criarMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restaurarMatricula)
module.exports = router

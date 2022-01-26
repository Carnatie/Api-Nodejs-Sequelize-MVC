const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('./turmaRoute')
const niveis = require('./nivelRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
}
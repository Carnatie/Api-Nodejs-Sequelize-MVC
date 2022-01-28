const {
    NUMBER
} = require('sequelize')
const database = require('../models')

class PessoaController {
    static async pegarTodasAsPessoasAtivas(req, res) {
        paranoid: false
        try {
            const todasAsPessoasAtivas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

     static async pegarTodasAsPessoas(req, res) {
         paranoid: false
         try {
             const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
             return res.status(200).json(todasAsPessoas)
         } catch (error) {
             return res.status(500).json(error.message)
         }
    }


    static async pegarUmaPessoa(req, res) {
        const {
            id
        } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoasCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoasCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res) {
        const {
            id
        } = req.params
        const novaInfo = req.body
        try {
            await database.Pessoas.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarPessoa(req, res) {
        const {
            id
        } = req.params
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                mensagem: `id ${id} deletado`
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarPessoa(req, res) {
        const {
            id
        } = req.params
        try {
            await database.Pessoas.restore({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                mensagem: `id ${id} Restaurado`
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const {
            estudanteId,
            matriculaId
        } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async criarMatricula(req, res) {
        const {
            estudanteId
        } = req.params
        const novaMatricula = {
            ...req.body,
            estudante_id: Number(estudanteId)
        }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res) {
        const {
            estudanteId,
            matriculaId
        } = req.params
        const novaInfo = req.body
        try {
            await database.Matriculas.update(novaInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const pessoaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }
    static async apagaMatricula(req, res) {
        const {
            estudanteId,
            matriculaId
        } = req.params
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                }
            })
            return res.status(200).json({
                mensagem: `id ${matriculaId} deletado`
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarMatricula(req, res) {
        const {
            estudanteId,
            matriculaId
        } = req.params
        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                }
            })
            return res.status(200).json({
                mensagem: `id ${matriculaId} Restaurado`
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController
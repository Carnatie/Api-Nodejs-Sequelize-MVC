const { NUMBER } = require('sequelize')
const database = require('../models')

class NivelController {
    static async pegaTodasOsNiveis(req, res) {
        paranoid: false
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }})
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req,res) {
        const novoNivel = req.body
        try {
            const novoNiveisCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNiveisCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarNivel(req,res) {
        const { id } = req.params
        const novaInfo = req.body
        try {
            await database.Niveis.update(novaInfo, {where: { id: Number(id)}})
            const nivelAtualizada = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }})
            return res.status(200).json(nivelAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarNivel(req,res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy({where: { id: Number(id)}})
            return res.status(200).json({mensagem : `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarNivel(req, res) {
        const {
            id
        } = req.params
        try {
            await database.Niveis.restore({
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

}

module.exports = NivelController
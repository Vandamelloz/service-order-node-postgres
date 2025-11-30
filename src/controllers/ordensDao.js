import { Ordem as Ordens } from "../models/ordens.js";
import { Cliente } from "../models/cliente.js"; 
import { Tecnico } from "../models/tecnicos.js";

class OrdensController {

    // [R] READ ALL - Lista as ordens (com dados do Cliente e Tecnico juntos)
    static async listAll(req, res) {
        try {
            const ordens = await Ordens.findAll({
                include: ["cliente", "tecnico"], // Traz os dados das tabelas relacionadas
                raw: true,  // Importante para Handlebars
                nest: true  // Organiza: ordem.cliente.nome ao invés de ordem.cliente.nome
            });
            res.render("ordens/index", { ordens });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao listar ordens: " + err.message);
        }
    }

    // [C] CREATE (GET) - Formulário precisa de Clientes e Técnicos
    static async createForm(req, res) {
        try {
            // Busca listas para preencher o <select> no HTML
            const clientes = await Cliente.findAll({ raw: true });
            const tecnicos = await Tecnico.findAll({ raw: true }); 
            
            res.render("ordens/new", { clientes, tecnicos });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao carregar formulário.");
        }
    }

    // [C] CREATE (POST) - Salva a ordem
    static async create(req, res) {
        try {
            // Supondo que seu form envie: descricao, clienteId, tecnicoId, status
            await Ordens.create(req.body);
            res.redirect("/ordens");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao criar ordem.");
        }
    }

    // [U] UPDATE (GET) - Formulário de Edição
    static async formEdit(req, res) {
        try {
            const ordem = await Ordens.findByPk(req.params.id, { 
                raw: true,
                nest: true // Necessário se quiser mostrar o nome atual do cliente
            });
            
            // Também precisamos das listas aqui para permitir TROCAR o cliente/técnico
            const clientes = await Cliente.findAll({ raw: true });
            const tecnicos = await Tecnico.findAll({ raw: true });

            if (ordem) {
                res.render("ordens/edit", { ordem, clientes, tecnicos });
            } else {
                res.redirect("/ordens");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao buscar ordem.");
        }
    }

    // [U] UPDATE (POST) - Atualiza
    static async update(req, res) {
        try {
            await Ordens.update(req.body, { where: { id: req.params.id } });
            res.redirect("/ordens");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao atualizar ordem.");
        }
    }

    // [D] DELETE
    static async delete(req, res) {
        try {
            await Ordens.destroy({ where: { id: req.params.id } });
            res.redirect("/ordens");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao deletar ordem.");
        }
    }
}

export { OrdensController };
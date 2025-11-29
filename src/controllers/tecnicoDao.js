import { Tecnico } from "../models/tecnicos.js";

class TecnicoController {

    // [R] READ ALL - Lista e renderiza a view
    static async listAll(req, res) {
        try {
            const tecnicos = await Tecnico.findAll({ raw: true }); // raw: true facilita pro Handlebars
            res.render("tecnicos/index", { tecnicos });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao listar técnicos: " + err.message);
        }
    }

    // [C] CREATE (GET) - Mostra o formulário de cadastro
    static createForm(req, res) {
        res.render("tecnicos/new");
    }

    // [C] CREATE (POST) - Recebe os dados e salva
    static async create(req, res) {
        try {
            // Supondo que Tecnico tenha nome e especialidade
            await Tecnico.create(req.body); 
            res.redirect("/tecnicos");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao criar técnico: " + err.message);
        }
    }

    // [U] UPDATE (GET) - Busca o técnico e mostra formulário de edição
    static async formEdit(req, res) {
        try {
            const tecnico = await Tecnico.findByPk(req.params.id, { raw: true });
            
            if (tecnico) {
                res.render("tecnicos/edit", { tecnico });
            } else {
                res.redirect("/tecnicos");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao buscar técnico.");
        }
    }

    // [U] UPDATE (POST) - Atualiza os dados no banco
    static async update(req, res) {
        try {
            await Tecnico.update(req.body, {
                where: { id: req.params.id }
            });
            res.redirect("/tecnicos");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao atualizar técnico: " + err.message);
        }
    }

    // [D] DELETE (POST) - Remove o técnico
    static async delete(req, res) {
        try {
            await Tecnico.destroy({
                where: { id: req.params.id }
            });
            res.redirect("/tecnicos");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao deletar técnico: " + err.message);
        }
    }
}

export { TecnicoController };
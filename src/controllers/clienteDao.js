import { Cliente } from "../models/cliente.js";

class ClienteController {

    // [R] READ ALL - Busca e Renderiza a Lista
    static async listAll(req, res) {
        try {
            const clientes = await Cliente.findAll({ raw: true }); // 'raw: true' ajuda no Handlebars
            // Renderiza a view 'clientes/index.hbs' passando a lista
            res.render("clientes/index", { clientes });
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao listar clientes: " + err.message);
        }
    }

    // [C] CREATE (GET) - Renderiza o formulário de cadastro
    static createForm(req, res) {
        res.render("clientes/new"); // Renderiza 'src/views/clientes/new.hbs'
    }

    // [C] CREATE (POST) - Recebe dados e Salva
    static async create(req, res) {
        try {
            // Pega os dados do formulário (req.body)
            const { nome, email, telefone } = req.body; 
            await Cliente.create({ nome, email, telefone });
            
            // Redireciona para a listagem após salvar
            res.redirect("/clientes");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao criar cliente.");
        }
    }

    // [U] UPDATE (GET) - Renderiza formulário de edição
    static async formEdit(req, res) {
        try {
            // Busca pelo ID da URL (req.params.id)
            const cliente = await Cliente.findByPk(req.params.id, { raw: true });
            
            if (cliente) {
                res.render("clientes/edit", { cliente });
            } else {
                res.redirect("/clientes");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao buscar cliente.");
        }
    }

    // [U] UPDATE (POST) - Salva as alterações
    static async update(req, res) {
        try {
            const id = req.params.id;
            const { nome, email, telefone } = req.body;
            
            await Cliente.update(
                { nome, email, telefone },
                { where: { id: id } }
            );
            
            res.redirect("/clientes");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao atualizar cliente.");
        }
    }

    // [D] DELETE (POST) - Remove o cliente
    static async delete(req, res) {
        try {
            await Cliente.destroy({ where: { id: req.params.id } });
            res.redirect("/clientes");
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao deletar cliente.");
        }
    }
}

export { ClienteController };
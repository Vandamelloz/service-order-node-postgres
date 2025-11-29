import { Router } from "express";
import { ClienteController } from "../controllers/clienteDao.js"; // Importe com o nome novo se mudar

const router = Router();

// Listar (Home dos Clientes)
router.get("/", ClienteController.listAll);

// Criar (Formulário e Ação)
router.get("/new", ClienteController.createForm);
router.post("/save", ClienteController.create); // Ajuste o action do form para /clientes/save

// Editar (Formulário e Ação)
router.get("/edit/:id", ClienteController.formEdit);
router.post("/update/:id", ClienteController.update); // Ajuste o action do form

// Deletar
router.post("/delete/:id", ClienteController.delete);

export default router;




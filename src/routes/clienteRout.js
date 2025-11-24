import { Router } from "express";
import { ClienteDao } from "../controllers/clienteDao.js";

const router = Router();

// Listar todos os clientes
router.get("/", ClienteDao.listAll);

// Form para criar cliente
router.get("/new", ClienteDao.findById);

// Criar cliente
router.post("/create", ClienteDao.create);

// Form para editar cliente
router.get("/edit/:id", ClienteDao.formEdit);

// Atualizar cliente
router.post("/update/:id", ClienteDao.update);

// Deletar cliente
router.post("/delete/:id", ClienteDao.delete);

export default router;



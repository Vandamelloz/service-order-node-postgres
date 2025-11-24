import { Router } from "express";
import { TecnicoDao } from "../controllers/tecnicoDao.js";

const router = Router();

// Listar técnicos
router.get("/", TecnicoDao.listAll);

// Form criação
router.get("/new", TecnicoDao.findById);

// Criar técnico
router.post("/create", TecnicoDao.create);

// Form edição
router.get("/edit/:id", TecnicoDao.formEdit);

// Atualizar técnico
router.post("/update/:id", TecnicoDao.update);

// Delete
router.post("/delete/:id", TecnicoDao.delete);

export default router;

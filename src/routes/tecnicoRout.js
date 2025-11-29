import { Router } from "express";
import { TecnicoController } from "../controllers/tecnicoDao.js";

const router = Router();

// Listar
router.get("/", TecnicoController.listAll);

// Criar
router.get("/new", TecnicoController.createForm);
router.post("/save", TecnicoController.create);

// Editar
router.get("/edit/:id", TecnicoController.formEdit);
router.post("/update/:id", TecnicoController.update);

// Deletar
router.post("/delete/:id", TecnicoController.delete);

export default router;
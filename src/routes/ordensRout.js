import { Router } from "express";
import { OrdensDao} from "../controllers/ordensDao.js";

const router = Router();

// Lista geral das OS
router.get("/", OrdensDao.listAll);

// Form nova OS
router.get("/new", OrdensDao.findById);

// Criar OS
router.post("/create", OrdensDao.create);

// Ver detalhes de uma OS
router.get("/details/:id", OrdensDao.findByIdCliente);

// Form editar OS
router.get("/edit/:id", OrdensDao.findByIdTecnico);

// Atualizar OS
router.post("/update/:id", OrdensDao.update);

// Alterar status (Aberta → Em andamento → Concluída)
router.post("/status/:id", OrdensDao.updateStatus);

router.post("/", OrdensDao.GetByidFull);

// Deletar OS
router.post("/delete/:id", OrdensDao.delete);

export default router;

import { Router } from "express";
import { OrdensController } from "../controllers/ordensDao.js";

const router = Router();

router.get("/", OrdensController.listAll);
router.get("/new", OrdensController.createForm);
router.post("/save", OrdensController.create);
router.get("/edit/:id", OrdensController.formEdit);
router.post("/update/:id", OrdensController.update);
router.post("/delete/:id", OrdensController.delete);

export default router;
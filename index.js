import { Router } from "express";

import clientesRoutes from "./clientesRoutes.js";
import tecnicosRoutes from "./tecnicosRoutes.js";
import ordensRoutes from "./ordensRoutes.js";

const router = Router();

// Rotas principais
router.use("/clientes", clientesRoutes);
router.use("/tecnicos", tecnicosRoutes);
router.use("/ordens", ordensRoutes);

// Página inicial
router.get("/", (req, res) => {
  res.render("home");
});

export default router;

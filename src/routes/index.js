
import { Router } from "express";
import clienteRoutes from "./clienteRout.js";
import tecnicoRoutes from "./tecnicoRout.js";
import ordensRoutes from "./ordensRout.js";

const router = Router();

// Definindo os prefixos das URLs
router.use("/clientes", clienteRoutes);
router.use("/tecnicos", tecnicoRoutes);
router.use("/ordens", ordensRoutes);

// Rota da Página Inicial (Home)
router.get("/", (req, res) => {
  res.render("home"); 
});

export default router;
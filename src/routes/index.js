// ARQUIVO: src/routes/index.js
import { Router } from "express";

// Importando os arquivos individuais
// ATENÇÃO: Os nomes aqui devem ser IDÊNTICOS aos arquivos na sua pasta
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
  // Renderiza a view 'home.handlebars' (certifique-se que ela existe em src/views)
  res.render("home"); 
});

export default router;
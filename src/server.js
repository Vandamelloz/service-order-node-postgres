import express from "express";
import routes from "./routes/index.js";
import path from "path";
import { engine } from "express-handlebars";

const app = express();

// Config Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Middleware padrão
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos estáticos
app.use(express.static("public"));

// Usar rotas
app.use("/", routes);

// Iniciar servidor
app.listen(3333, () => console.log("Servidor rodando em http://localhost:3333"));

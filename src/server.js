// src/server.js
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // <--- IMPORTANTE: Importar isso
import masterRouter from './routes/index.js';
import { sequelize } from './db.js';

// --- CONFIGURAÇÃO DO __DIRNAME PARA ES MODULES ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// -------------------------------------------------

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

// Configuração do Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'hbs');

// Configuração de Caminhos
app.set('views', path.join(__dirname, 'views')); 

// Pasta public (assumindo que está fora de src)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/', masterRouter);

// Inicialização
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conexão com o banco de dados estabelecida.');
        // Sincroniza o banco (cria tabelas se não existirem) - Útil para dev
        return sequelize.sync(); 
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ Erro ao conectar no banco:', err);
    });
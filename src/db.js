// src/db.js

import pkg from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { Sequelize } = pkg;

// Cria a instância do Sequelize
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // Dialeto para PostgreSQL
    }
);

// NOTA: O teste de conexão foi MOVIDO para server.js (Passo 6)
// Isso garante que o servidor só suba se o BD estiver online.
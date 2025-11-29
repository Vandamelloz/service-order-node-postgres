import { DataTypes } from 'sequelize'; 
import { sequelize } from '../db.js'; 
export const Tecnico = sequelize.define('Tecnico', {
    id: {
        type: DataTypes.INTEGER, // "DataTypes"
        primaryKey: true,
        autoIncrement: true // Adicionei isso para o ID crescer sozinho (1, 2, 3...)
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidade: {
        type: DataTypes.STRING
    }
});
import { DataTypes } from 'sequelize'; // "DataTypes" com D maiúsculo
import { sequelize } from "../db.js"; 

export const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER, // "DataTypes"
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    }
});
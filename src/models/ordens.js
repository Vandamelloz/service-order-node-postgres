import { DataTypes } from "sequelize";
import { sequelize } from "../db.js"; 
import { Cliente } from "./cliente.js"; 
import { Tecnico } from "./tecnicos.js"; 

export const Ordem = sequelize.define("Ordem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false 
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'Pendente' 
    },
    data_abertura:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    data_fechamento:{
        type: DataTypes.DATE,
        allowNull: true 
    }
});


Ordem.belongsTo(Cliente, {
    foreignKey: 'clienteId',
    as: 'cliente' // Apelido para usar no include
});

Ordem.belongsTo(Tecnico, {
    foreignKey: 'tecnicoId',
    as: 'tecnico'
});
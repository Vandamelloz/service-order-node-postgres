import { DataTypes } from "sequelize";
import { sequelize } from "src/db.js";
import {Cliente} from 'src/models/cliente.js';
import {Tecnico} from 'src/models/tecnicos.js';

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
        allowNull: false //permitir campo nulo
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'Pendente' //valor padrão
    },
    data_abertura:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW //data atual
    },
    data_fechamento:{
        type: DataTypes.DATE,
        allowNull: true //permitir campo nulo
    }
});
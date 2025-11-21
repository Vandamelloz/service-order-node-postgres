import {dataTypes} from 'sequelize';
import {sequelize }from 'src/db.js';

export const Cliente = sequelize.define('Cliente',{
    id:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:dataTypes.STRING,
        allowNull:false
    },
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING
})
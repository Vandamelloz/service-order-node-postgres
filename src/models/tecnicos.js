import {dataTypes} from 'sequelize';
import {sequelize} from 'src/db.js';

export const Tecnico= sequelize.define('Tecnico', {
    id:{
        type:dataTypes.INTEGER,
        primaryKey:true,
},
    nome:{
        type:dataTypes.STRING,
        allowNull:false
    },
    especialidade: dataTypes.STRING
    })
// require('./models/http');
// const {Person}= require('./person');

// const person= new Person('Alice');
// require('./src/models/path');
// person.sayHello();

// require('./models/express');
const cliente= require('./database/connect');
const dotenv= require('dotenv');
const dbConnect= require('./database/connect');
require('dotenv').config();
cliente.query('SELECT NOW()').then(res=>{
    console.log('Data e hora do banco de dados:', res.rows[0]);
}
).catch(err=>{
    console.error('Erro ao executar a consulta:', err);
});
// console.log('Variável de ambiente

// require('./src/models/fs');
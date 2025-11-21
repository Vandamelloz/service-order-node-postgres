const pkg= require('pg');
const dotenv= require('dotenv');
dotenv.config(); 
const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect().then(()=>{
  console.log('Conectado ao banco de dados com sucesso!');
}).catch((err)=>{
  console.error('Erro ao conectar ao banco de dados:', err);
});
module. exports= client;
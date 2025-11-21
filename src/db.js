import pkg from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const { Sequelize } = pkg;
//Pool de conexões com o banco de dados
 export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
     {
        host: process.env.DB_HOST, // Adiciona a configuração do host somente se estiver definida
        dialect: 'postgres' // Define o dialeto como 'postgres'
      }
);
//Testa a conexão com o banco de dados
sequelize.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
}
).catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});

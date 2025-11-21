import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Função para popular as tabelas
async function seed() {
  try {
    // Inserir clientes
    const clientes = [
      ['Vanda Mello', '11999999999', 'Rua Exemplo, 123'],
      ['Carlos Silva', '11988888888', 'Av. Paulista, 456'],
      ['Ana Pereira', '11977777777', 'Rua das Flores, 789']
    ];

    for (let c of clientes) {
      await pool.query(
        'INSERT INTO clientes (nome, telefone, endereco) VALUES ($1, $2, $3) RETURNING *',
        c
      );
    }

    // Inserir técnicos
    const tecnicos = [
      ['João Silva', 'Eletrônica'],
      ['Marcos Santos', 'Mecânica'],
      ['Paula Costa', 'Informática']
    ];

    for (let t of tecnicos) {
      await pool.query(
        'INSERT INTO tecnicos (nome, especialidade) VALUES ($1, $2) RETURNING *',
        t
      );
    }

    // Inserir ordens
    const ordens = [
      ['Conserto de motor', 'Motor não liga', 1, 1],
      ['Manutenção de computador', 'PC travando', 2, 3],
      ['Reparo de ar-condicionado', 'Não resfria', 3, 2]
    ];

    for (let o of ordens) {
      await pool.query(
        `INSERT INTO ordens (titulo, descricao, cliente_id, tecnico_id) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        o
      );
    }

    console.log('Tabelas populadas com sucesso!');
  } catch (err) {
    console.error('Erro ao popular tabelas:', err);
  } finally {
    await pool.end();
  }
}

// Executa a função
seed();

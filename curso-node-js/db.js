import 'dotenv/config'
import postgres from 'postgres'

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

// O cliente "postgres" pode aceitar um objeto de configuração
export const sql = postgres({
  host: DB_HOST,        // Usa a variável DB_HOST
  database: DB_DATABASE,  // Usa a variável DB_DATABASE
  username: DB_USER,      // Usa a variável DB_USER
  password: DB_PASSWORD,  // Usa a variável DB_PASSWORD
  port: parseInt(DB_PORT, 10), // Converte a string da porta para número
  ssl: false, // Desabilita o SSL para conexões locais
});

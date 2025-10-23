import dotenv from "dotenv";
import { sql } from "./db.js";

import pg from 'pg';

const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('Tabela apagada')
// })

sql`
  CREATE TABLE videos( 
    id TEXT,
    title TEXT,
    description TEXT,
    duration INTEGER)
;
`.then(() => {
  console.log('Tabela criada')
})
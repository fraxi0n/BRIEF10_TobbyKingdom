import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";

import dotenv from "dotenv";
dotenv.config()
const env  = process.env

const run = async () => {
  const user = env.PGUSER
  const pswd = env.PGPASSWORD
  const host = env.PGHOST
  const name = env.PGDATABASE

  const client = new Client({
    user: user,
    password: pswd,
    host: host,
    database: name,
  });
   console.log (client.user)

  const seedSQL = fs.readFileSync(
    path.resolve("db/BRIEF10.sql"),
    "utf8"
  );

  await client.connect();

  try {
    await client.query(seedSQL);
    console.log(`Base de données ${name} peuplée`);
  } finally {
    await client.end();
  }
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
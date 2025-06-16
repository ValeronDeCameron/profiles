const {Client} = require('pg')

const db_name = 'node_profile'

const system_client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: '1111',
  port: 5432,
  database: 'postgres'
})
const db_client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: '1111',
  port: 5432,
  database: db_name
})

async function initDb() {
  try {
    await system_client.connect();
    const res = await system_client.query(`SELECT 1
                                           FROM pg_database
                                           WHERE datname = '${db_name}'`);
    if (res.rowCount === 0) {
      await system_client.query(`CREATE DATABASE ${db_name}`);
      console.log(`BD ${db_name} CREATED`);
    } else {
      console.log(`BD ${db_name} ALREADY EXISTS`);
    }

    await system_client.end();

    await db_client.connect();
    const table = await db_client.query(`SELECT to_regclass('public.users')`);
    if (table.rows[0].to_regclass !== null) {
      console.log('TABLE "users" already exists')
    } else {
      await db_client.query(`create TABLE users
                             (
                                 id       SERIAL PRIMARY KEY,
                                 login    VARCHAR(255),
                                 email    VARCHAR(255),
                                 password VARCHAR(255)
                             );
      `)
      console.log('Table "users" CREATED')
    }
    await db_client.end();
  } catch (err) {
    console.error("ERROR: ", err);
  }
}

initDb();

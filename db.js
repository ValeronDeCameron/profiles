const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '1111',
    host: 'localhost',
    port: 5432,
    database: "node_profile"
})

module.exports = pool
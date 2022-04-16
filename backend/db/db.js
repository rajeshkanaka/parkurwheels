const Pool = require("pg").Pool
const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:"3304",
    database:"parking_db",
    port:5432
})
pool.connect()

module.exports = pool
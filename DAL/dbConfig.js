//config.js
const mysql = require('mysql');

// Set database connection credentials
// ELEOS_DB_HOST = localhost
// 
const dbConfig = {
    host: `${process.env.ELEOS_DB_HOST}`,
    user: `${process.env.ELEOS_DB_USER}`,
    password: `${process.env.ELEOS_DB_PASS}`,
    database: `${process.env.ELEOS_DB_NAME}`,
};

// const dbConfig = {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'eleos_db',
// };

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Export the pool
module.exports = pool;
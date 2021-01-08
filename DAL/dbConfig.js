//config.js
const mysql = require('mysql');

// Set database connection credentials
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eleos_db',
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Export the pool
module.exports = pool;
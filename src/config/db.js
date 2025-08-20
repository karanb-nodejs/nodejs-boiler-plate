const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ MySQL Connection Failed:', err.message);
    } else {
        console.log('✅ MySQL Connection Successful');
        connection.release();
    }
});

module.exports = pool;

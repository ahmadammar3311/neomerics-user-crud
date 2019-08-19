const mysql = require('mysql');
// Connection with localhost
var connection = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "password": "abc123",
    "database": "neomerics"
});


module.exports = connection;
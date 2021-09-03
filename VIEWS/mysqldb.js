var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password : '123456789',
    database : 'soyeonidb'
});

module.exports = connection;
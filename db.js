const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    user:'root',
    password:'123456789',
    port:3306,
    database:'eisprojectdb'
});

connection.connect();
 
connection.query('SELECT NAME FROM Produce_Util;', function (error, results) {
    if (error) throw error;
    console.log(results);
  });
   


module.exports = connection;
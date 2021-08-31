const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  user     : 'root',
  password : '123456789',
  database : 'contacts'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
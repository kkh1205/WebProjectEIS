var mysql = require('mysql');
var connection = mysql.createConnection({
  host  : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  user  : 'root',
  password  : '123456789',
  database  : 'kkhPractice'
})

connection.connect(function(error) {
  if(error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }

});

var dataarr = ['','','',''] ;

connection.query('SELECT A01 FROM productionTest', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  dataarr = results;
  console.log(dataarr);
});

connection.end();
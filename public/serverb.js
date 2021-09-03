// var express = require('express');
// var router = express.Router();

// var mysql = require('mysql');

// router.get('/', function (req, res, next) {
//     var connection = mysql.createConnection({
//     host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
//     port     : '3306',
//     user     : 'root',
//     password : '123456789',
//     database : 'soyeonidb'
//     });
//     connection.connect();
//     connection.query('select * from contacts', function (err, rows, fields) {
//         connection.end();
//         if (!err) {
//             console.log(rows);
//             console.log(fields);
//             var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
//                 'fields : ' + JSON.stringify(fields);
//             res.send(result);
//         } else {
//             console.log('query error : ' + err);
//             res.send(err);
//         }
//     });
// });

// module.exports = router;

/*show-all-data.js*/
var express = require('express');
var router = express.Router();

var mysqlDB = require('../VIEWS/mysqldb');

router.get('/', function (req, res, next) {
    mysqlDB.query('select * from dbtest', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
           
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>';
               
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;

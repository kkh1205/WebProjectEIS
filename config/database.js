var mysql = require('mysql');
var db_info = {
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password : '123456789',
    database : 'soyeonidb'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
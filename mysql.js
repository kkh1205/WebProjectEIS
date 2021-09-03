var mysql = require('mysql'); //use mysql module


var connection = mysql.createConnection({ //mysql 객체의 createConnection 메소드 호출
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com', //호스트 설정
    port: '3306',
    user: 'root', //mysql에서 설정한 유저이름
    password: '123456789', //mysql에서 설정한 유저 패스워드
    database: 'soyeonidb' //mysql에서 설정한 데이터베이스 명
});

connection.connect(); //db연결

//연결후 동작.
connection.query('select * from contacts', function (error, results, fields) { 
    if (error) {
        console.log(error);
    }
    console.log(results);
});
 
connection.end();

var http = require('http')
var express    = require("express");  
var mysql      = require('mysql');
var bodyParser = require('body-parser');

// 데이터 베이스 연결
var connection = mysql.createConnection({  
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com', //호스트 설정
    port: '3306',
    user: 'root', //mysql에서 설정한 유저이름
    password: '123456789', //mysql에서 설정한 유저 패스워드
    database: 'soyeonidb' //mysql에서 설정한 데이터베이스 명
});

connection.connect(function(err){  
    if(!err) {  
        console.log("Database is connected ... \n\n");    
    } else {  
        console.log("Error connecting database ... \n\n");    
    }  
    });  


// 웹 서버 생성
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router)

app.get('/', function (request, response) {
    // 데이터 베이스 요청을 수행합니다.
    connection.query('select * from contacts', function (error, date) {
        response.send(data);
    });
});

// 웹 서버 실행
http.createServer(app).listen(3000, function(){
    console.log('Server Running at http');
});
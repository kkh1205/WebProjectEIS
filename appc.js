var express = require('express');
var app = express();

var options = require('./src/option');

var loginData = {
        host: options.storageConfig.HOST,
        user: options.storageConfig.user,
        password: options.storageConfig.password
};

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com', //호스트 설정
    port: '3306',
    user: 'root', //mysql에서 설정한 유저이름
    password: '123456789', //mysql에서 설정한 유저 패스워드
    database: 'soyeonidb' //mysql에서 설정한 데이터베이스 명
})
connection.connect();

app.use(express.static('public'));

app.listen(3000,function(){
  console.log("server start on port 3000!");
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/main.html');
});

app.post('/', function(req, res){
  var responseData = {};

  var query =  connection.query('select age from dbtest', function(err,rows){
    responseData.score = [];
    if(err) throw err;
    if(rows[0]){
      responseData.result = "ok";
      rows.forEach(function(val){
        responseData.score.push(val.score);
      })
    }
    else{
      responseData.result = "none";
      responseData.score = "";
    }
    res.json(responseData);
  });
});
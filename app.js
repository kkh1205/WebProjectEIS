var express = require('express'); // npm i express 해서 서버 여는데 도움주는 여러가지가 담긴 tool
var app = express();

var options = require('./src/option'); // option에 관한 부분 불러오기

var loginData = {
        host: options.storageConfig.HOST,
        user: options.storageConfig.user,
        password: options.storageConfig.password
};

var mysql = require('mysql'); // my sql에 저장된 데이터 가져오기
var connection = mysql.createConnection({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password :'123456789',
    database : 'JHDB'
})
connection.connect();

app.use(express.static('DBServer'));

app.listen(3000,function(){
  console.log("server start on port 3000!");
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/DBServer/sales.html');
});

app.post('/', function(req, res){ //포스트방식으로 데이터 쿼리 날리기!
  var responseData = {};

  var query =  connection.query('select score from Y2021_product where uid="ma"', function(err,rows){
    responseData.score = [];
    if(err) throw err;
    if(rows[0]){
      responseData.result = "ok";
      rows.forEach(function(val){
        responseData.score.push(val.score); // responseData에다가 배열로 저장을 시킴
        console.log("array sucess!");
      })
    }
    else{
      responseData.result = "none";
      responseData.score = "";
    }
    res.json(responseData);
    console.log("responce success!");

  });
});
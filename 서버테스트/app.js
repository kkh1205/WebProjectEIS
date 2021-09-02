var express = require('express'); // npm i express 해서 서버 여는데 도움주는 여러가지가 담긴 tool
var app = express();

var options = require('./src/option'); // option에 관한 부분 불러오기

var loginData = {
        host: options.storageConfig.HOST,
        user: options.storageConfig.user,
        password: options.storageConfig.password
};

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password :'123456789',
    database : 'JHDB'
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

  var query =  connection.query('select score from scoreboard where uid="ma" ORDER BY num DESC limit 10', function(err,rows){
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
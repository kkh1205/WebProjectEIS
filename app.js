var express = require('express'); // npm i express 해서 서버 여는데 도움주는 여러가지가 담긴 tool
var app = express();

var options = require('./src/option'); // option에 관한 부분 불러오기



var mysql = require('mysql'); // my sql에 저장된 데이터 가져오기
var connection = mysql.createConnection({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password :'123456789',
    database : 'eisprojectdb'
})
connection.connect();

app.use(express.static('DBServer'));

app.listen(3005,function(){
  console.log("server start on port 3005!");
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/DBServer/index.html');
});

app.post('/', function(req, res){ //포스트방식으로 데이터 쿼리 날리기!
  var responseData = {};

  var query =  connection.query('select product,score,nonscore,reducer,Nreducer,a380,c550,kf_21,circle from Y2021_Sales_JH', function(err,rows){
    responseData.score = [];
    responseData.product = [];
    responseData.nonscore = [];
    responseData.reducer = [];
    responseData.Nreducer = [];
    responseData.a380 = [];
    responseData.c550 = [];
    responseData.kf_21 = [];
    responseData.circle = [];

    if(err) throw err;
    if(rows[0]){
      responseData.result = "ok";
      rows.forEach(function(val){
        responseData.score.push(val.score); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.product.push(val.product); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.nonscore.push(val.nonscore); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.reducer.push(val.reducer); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.Nreducer.push(val.Nreducer); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.a380.push(val.a380); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.c550.push(val.c550); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.kf_21.push(val.kf_21); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.circle.push(val.circle); // responseData에다가 배열로 저장을 시킴
        
      })

    }
    else{
      responseData.result = "none";
      responseData.score = "";
      responseData.product = "";
      responseData.nonscore = "";
      responseData.reducer = "";
      responseData.Nreducer = "";
      responseData.a380 = "";
      responseData.c550 = "";
      responseData.kf_21 = "";
      responseData.circle = "";

    }
    console.log(responseData.product);
    console.log(responseData.score);
    console.log(responseData.nonscore);
    console.log(responseData.reducer);
    console.log(responseData.Nreducer);
    console.log(responseData.a380);
    console.log(responseData.c550);
    console.log(responseData.kf_21);
    console.log(responseData.circle);

    res.json(responseData);
    console.log("responce success!" + responseData);

  });

  
});
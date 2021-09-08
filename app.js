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




app.post('/sales.html', function(req, res){ //포스트방식으로 데이터 쿼리 날리기!
  var responseData = {};

  var query =  connection.query('select * from Y2021_Sales_JH RIGHT JOIN Y2020_Sales_JH ON Y2021_Sales_JH.`월별`=Y2020_Sales_JH.`월별` RIGHT JOIN Y2019_Sales_JH ON Y2020_Sales_JH.`월별` = Y2019_Sales_JH.`월별`', function(err,rows){
    //2021
    responseData.score = [];
    responseData.product = [];
    responseData.nonscore = [];
    responseData.reducer = [];
    responseData.Nreducer = [];
    responseData.a380 = [];
    responseData.c550 = [];
    responseData.kf_21 = [];
    responseData.circle = [];
    //2020
    responseData.score1 = [];
    responseData.product1 = [];
    responseData.nonscore1 = [];
    responseData.reducer1 = [];
    responseData.Nreducer1 = [];
    responseData.a3801 = [];
    responseData.c5501 = [];
    responseData.kf_211 = [];
    responseData.circle1 = [];
    //2019
    responseData.score2 = [];
    responseData.product2 = [];
    responseData.nonscore2 = [];
    responseData.reducer2 = [];
    responseData.Nreducer2 = [];
    responseData.a3802 = [];
    responseData.c5502 = [];
    responseData.kf_212 = [];
    responseData.circle2 = [];
    if(err) throw err;
    if(rows[0]){
      responseData.result = "ok";

      //2021
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


      // 2020


      rows.forEach(function(val){
        responseData.score1.push(val.score1); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.product1.push(val.product1); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.nonscore1.push(val.nonscore1); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.reducer1.push(val.reducer1); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.Nreducer1.push(val.Nreducer1); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.a3801.push(val.a3801); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.c5501.push(val.c5501); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.kf_211.push(val.kf_211); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.circle1.push(val.circle1); // responseData에다가 배열로 저장을 시킴
        
      })


      // 2019


      rows.forEach(function(val){
        responseData.score2.push(val.score2); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.product2.push(val.product2); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.nonscore2.push(val.nonscore2); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.reducer2.push(val.reducer2); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.Nreducer2.push(val.Nreducer2); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.a3802.push(val.a3802); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.c5502.push(val.c5502); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.kf_212.push(val.kf_212); // responseData에다가 배열로 저장을 시킴
        
      })

      rows.forEach(function(val){
        responseData.circle2.push(val.circle2); // responseData에다가 배열로 저장을 시킴
        
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

      responseData.score1 = "";
      responseData.product1 = "";
      responseData.nonscore1 = "";
      responseData.reducer1 = "";
      responseData.Nreducer1 = "";
      responseData.a3801 = "";
      responseData.c5501 = "";
      responseData.kf_211 = "";
      responseData.circle1 = "";

      responseData.score2 = "";
      responseData.product2 = "";
      responseData.nonscore2 = "";
      responseData.reducer2 = "";
      responseData.Nreducer2 = "";
      responseData.a3802 = "";
      responseData.c5502 = "";
      responseData.kf_212 = "";
      responseData.circle2 = "";
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


    console.log(responseData.product1);
    console.log(responseData.score1);
    console.log(responseData.nonscore1);
    console.log(responseData.reducer1);
    console.log(responseData.Nreducer1);
    console.log(responseData.a3801);
    console.log(responseData.c5501);
    console.log(responseData.kf_211);
    console.log(responseData.circle1);

    console.log(responseData.product2);
    console.log(responseData.score2);
    console.log(responseData.nonscore2);
    console.log(responseData.reducer2);
    console.log(responseData.Nreducer2);
    console.log(responseData.a3802);
    console.log(responseData.c5502);
    console.log(responseData.kf_212);
    console.log(responseData.circle2);

    res.json(responseData);
    console.log("response success!" + responseData);

  });

  
});


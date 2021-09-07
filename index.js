/* KH. 밑의 주석 전부는 김기훈이 작성함. */

var express = require('express'); // HTTP핸들러(서버에 연결하여 DB데이터를 가져오는 기능)를 포함한 웹 프레임워크.
var app = express(); // express 객체 인스턴스 생성
var options = require('./src/option'); // fs는 '파일 시스템'의 약자
// node.js 환경에서 파일시스템에 접근, 사용할 수 있게 해주는 모듈이다.

var mysql = require('mysql'); // mysql 사용시 쓰는 모듈
// 새 연결 db생성.
var db = mysql.createConnection({
  host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  port : 3306,
  user : 'root',
  password : '123456789',
  database : 'kkhPractice'
})

db.connect(); // 생성된 db 연결

/* 기본라우팅
라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.

각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행됩니다. */
/* 한줄요약 라우팅 : 사용자의 요청을 적당한 컨트롤러와 연결해주는 작업. */

app.use(express.static('public')); // public을 쓰겠다.

app.listen(3001,function(){
  console.log("server start on port 3001.");
}) // 서버를 리스닝 한다. 나는 3001번을 리스닝했다.

app.get('/', function(req,res){ // req(요청),res(응답) '/'는 서버에서의 경로, function은 라우트가 일치할 때 실행되는 함수.
  res.sendFile(__dirname+'/public/main.html');
})

app.post('/', function(req,res){ // 포스트방식으로 데이터쿼리 전송
  var responseData = {}; // 객체 선언

  var query = db.query('SELECT production.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,NULL,NULL,NULL,NULL FROM production JOIN quality ON production.quarter = quality.quarter JOIN quarterlySales_operatingProfit ON quality.quarter = quarterlySales_operatingProfit.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales ', function(err,rows){
    responseData.A01P = [];
    responseData.A02P = [];
    responseData.A03P = [];

    if(err) throw err;
    if(rows[0]) {
      responseData.result = 'ok';
      rows.forEach(function(val){
        responseData.A01P.push(val.A01P);
      });

      rows.forEach(function(val){
        responseData.A02P.push(val.A02P);
      });

      rows.forEach(function(val){
        responseData.A03P.push(val.A03P);
      });
    }
    else{
      responseData.result = 'none';
      responseData.A01P = '';
      responseData.A02P = '';
      responseData.A03P = '';
    }
    res.json(responseData);
    console.log('success \n'+responseData);

  });
  
});


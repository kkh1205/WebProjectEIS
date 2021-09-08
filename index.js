/* KH. 밑의 주석 전부는 김기훈이 작성함. */

var express = require('express'); // HTTP핸들러(서버에 연결하여 DB데이터를 가져오는 기능)를 포함한 웹 프레임워크.
var app = express(); // express 객체 인스턴스 생성
var options = require('./src/option'); // fs는 '파일 시스템'의 약자
// node.js 환경에서 파일시스템에 접근, 사용할 수 있게 해주는 모듈이다.

var mysql = require('mysql'); // mysql 사용시 쓰는 모듈
// 새 연결 db생성.
var db = mysql.createConnection({
  host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: '123456789',
  database: 'eisprojectdb'
})

db.connect(); // 생성된 db 연결

/* 기본라우팅
라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.

각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행됩니다. */
/* 한줄요약 라우팅 : 사용자의 요청을 적당한 컨트롤러와 연결해주는 작업. */

app.use(express.static('public')); // public을 쓰겠다.

app.listen(3001, function () {
  console.log("server start on port 3001.");
}) // 서버를 리스닝 한다. 나는 3001번을 리스닝했다.

app.get('/', function (req, res) { // req(요청),res(응답) '/'는 서버에서의 경로, function은 라우트가 일치할 때 실행되는 함수.
  res.sendFile(__dirname + '/public/main.html');
})

app.post('/main.html', function (req, res) { // 포스트방식으로 데이터쿼리 전송
  var responseData = {}; // 객체 선언
  /* KH. 데이터 가지고 오는 쿼리문. 좀 가라로 했습니다. */
  var query = db.query('SELECT production.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production left JOIN quality ON production.quarter = quality.quarter left JOIN quarterlySales_operatingProfit ON quality.quarter = quarterlySales_operatingProfit.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales UNION ALL SELECT production_2020.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production_2020 left JOIN quality_2020 ON production_2020.quarter = quality_2020.quarter left JOIN quarterlySales_operatingProfit_2020 ON quality_2020.quarter = quarterlySales_operatingProfit_2020.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales_2020 UNION ALL SELECT production_2019.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production_2019 left JOIN quality_2019 ON production_2019.quarter = quality_2019.quarter left JOIN quarterlySales_operatingProfit_2019 ON quality_2019.quarter = quarterlySales_operatingProfit_2019.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales_2019;', function (err, rows) {
    /* KH. 생산 */
    responseData.A01P = [];
    responseData.A02P = [];
    responseData.A03P = [];
    /* KH. 매출 */
    responseData.quarter1 = [];
    responseData.quarter2 = [];
    responseData.quarter3 = [];
    responseData.quarter4 = [];
    /* KH. 품질 */
    responseData.A01Q = [];
    responseData.A02Q = [];
    responseData.A03Q = [];
    /* KH. 매출액 & 영업이익 */
    responseData.quarterlySales = [];
    responseData.operatingProfit = [];

    if (err) throw err;
    if (rows[0]) {
      responseData.result = 'ok';
      /* KH. 생산 */
      rows.forEach(function (val) {
        responseData.A01P.push(val.A01P);
      });

      rows.forEach(function (val) {
        responseData.A02P.push(val.A02P);
      });

      rows.forEach(function (val) {
        responseData.A03P.push(val.A03P);
      });
      /* KH.매출 */
      rows.forEach(function (val) {
        responseData.quarter1.push(val.quarter1);
      });
      rows.forEach(function (val) {
        responseData.quarter2.push(val.quarter2);
      });
      rows.forEach(function (val) {
        responseData.quarter3.push(val.quarter3);
      });
      rows.forEach(function (val) {
        responseData.quarter4.push(val.quarter4);
      });
      /* KH.품질 */
      rows.forEach(function (val) {
        responseData.A01Q.push(val.A01Q);
      });
      rows.forEach(function (val) {
        responseData.A02Q.push(val.A02Q);
      });
      rows.forEach(function (val) {
        responseData.A03Q.push(val.A03Q);
      });
      /* KH.매출액 & 영업이익 */
      rows.forEach(function (val) {
        responseData.quarterlySales.push(val.quarterlySales);
      });
      rows.forEach(function (val) {
        responseData.operatingProfit.push(val.operatingProfit);
      });
    } else {
      responseData.result = 'none';
      /* KH.생산 */
      responseData.A01P = '';
      responseData.A02P = '';
      responseData.A03P = '';
      /* KH.매출 */
      responseData.quarter1 = '';
      responseData.quarter2 = '';
      responseData.quarter3 = '';
      responseData.quarter4 = '';
      /* KH.품질 */
      responseData.A01Q = '';
      responseData.A02Q = '';
      responseData.A03Q = '';
      /* KH.매출액 & 영업이익 */
      responseData.quarterlySales = '';
      responseData.operatingProfit = '';
    }

    /* responseData를 json으로 응답함. */
    res.json(responseData);
    console.log('success \n' + responseData);

  });

});

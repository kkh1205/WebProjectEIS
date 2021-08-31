// node_modules 에 있는 mysql를 require한다
var express = require('express');
var app = express();
const mysql = require('mysql')
// express 는 함수이므로, 반환값을 변수에 저장한다.
const conn = ({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password :'123456789',
    database : 'JHDB'
})

var connection = mysql.createConnection(conn);

connection.connect();

var testQuery = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM members";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end();

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/DBServer/index.html")
})


//서버의 기본 파일경로를 views폴더로 고정함
app.use(express.static('DBServer'))


app.listen(3000, function() {
    console.log("로컬호스트 서버 실행 : 3000")
})
// conn.query('SELECT * FROM monthsales', function(error, results, fields){
//     if(error) throw error;
//     console.log('The solution is:', results[0].solution);
// });
//views폴더의 idex파일을 기본 경로로 지정

// 이제 터미널에 node index.js 를 입력해보자. 
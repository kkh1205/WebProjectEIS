// node_modules 에 있는 express를 require한다
var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()


//views폴더의 idex파일을 기본 경로로 지정
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})


//서버의 기본 파일경로를 views폴더로 고정함
app.use(express.static('public'))



// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("로컬호스트 서버 실행 : 3000")
})

// 이제 터미널에 node index.js 를 입력해보자.
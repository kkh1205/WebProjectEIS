var express = require('express');
var app = express();

app.set('view engine','ejs'); // 1. ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req,res){ // 2. query를 통해서 이름을 받는 코드입니다. 모든 query들은 req.query에 저장
  res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req,res){    // 3. route parameter를 통해 이름을 받는 코드입니다. 콜론(:)으로 시작되는 route은 해당 부분에 입력되는 route의 텍스트가 req.params에 저장됩니다.
  res.render('hello', {name:req.params.nameParam});//예를들어 /hello/Kim을 입력하면 "/hello/:nameParam"에 의해 세미콜론이 있는 route의 2번째 부분 즉, Kim이 req.params.nameParam으로 저장됩니다
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
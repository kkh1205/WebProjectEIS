var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com', //호스트 설정
    port: '3306',
    user: 'root', //mysql에서 설정한 유저이름
    password: '123456789', //mysql에서 설정한 유저 패스워드
    database: 'soyeonidb' //mysql에서 설정한 데이터베이스 명
});  
var app = express(); 

//데이터베이스 쿼리 사용, 비동기 방식임
connection.query('contacts');
connection.query('select * from contacts', function (error, results, fields) { 
    if (error) {
        console.log(error);
    }
    console.log(results);
});

////////////////////////////////////////////////////////////////
  
var  data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
        label: '# of Votes',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};



var ctx = document.getElementById('myCharta').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

 
var button = document.getElementById("sendAjax")
 
button.addEventListener("click", function() {
    sendAjax('http://localhost:3000/');
})
 
function sendAjax(url) {
    var oReq = new XMLHttpRequest();
 
    oReq.open('POST', url);
    oReq.setRequestHeader('Content-Type', "application/json") // json 형태로 보낸다                         
    oReq.send();
 
    oReq.addEventListener('load', function() {
        var result = JSON.parse(oReq.responseText);
        var score = result.score;
        var comp_data = data.datasets[0].data;
 
        for (var i = 0; i < comp_data.length; i++) {
            comp_data[i] = score[i];
        }
 
        data.datasets[0].data = comp_data;
        myChart.update();
    })
}


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
  
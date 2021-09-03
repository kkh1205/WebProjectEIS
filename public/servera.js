var http = require('http')
var express    = require("express");  
var mysql      = require('mysql');
var bodyParser = require('body-parser');

// 데이터 베이스 연결
var connection = mysql.createConnection({  
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com', //호스트 설정
    port: '3306',
    user: 'root', //mysql에서 설정한 유저이름
    password: '123456789', //mysql에서 설정한 유저 패스워드
    database: 'soyeonidb' //mysql에서 설정한 데이터베이스 명
});

connection.connect(function(err){  
    if(!err) {  
        console.log("Database is connected ... \n\n");    
    } else {  
        console.log("Error connecting database ... \n\n");    
    }  
    });  



app.get('/', function (req, res) {
    res.send('This is board update');
});

app.listen(3000, () => console.log('Server listen on port 3000...'));


connection.query('SELECT * from contacts', function(err, rows, fields) {  
    connection.end();  
      if (!err){  
           var data="<html><head><title>mysql test</title></head>"  
           data+="<h1>주소록</h1>"  
           data+="<table border=\"1\">"    
           data+="<tr><th>id</th><th>title</th><th>name</th><th>com</th><th>tel</th><th>email</th></tr>"  
      
    for (var i in rows){  
        data += "<tr>"  
        data += "<td>"+rows[i].id +"</td>"  
        data += "<td>"+rows[i].title+"</td>"
        data += "<td>"+rows[i].name+"</td>" 
        data += "<td>"+rows[i].com+"</td>" 
        data += "<td>"+rows[i].tel+"</td>"  
        data += "<td>"+rows[i].email+"</td>";  
        data += "</tr>"  
    }  
      
    data+="</table></html>"  
      
    response.send(data);  
      }  
      else  
        console.log('Error while performing Query.');  
      });  
    });  
      
    app.listen(3000);  
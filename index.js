var express = require('express');
var app = express();

var options = require('./src/option');



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
  port:3306,
  user: 'root',
  password:'123456789',
  database:'eisprojectdb'
})
connection.connect();

app.use(express.static('public'));

app.listen(3000,function(){
  console.log("server start on port 3000!");
})

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
});

app.post('/produce.html', function(req, res){
  var responseData = {};

  var querypro =  connection.query('SELECT proUtil.score, proUtil.uid, proTable.run, proTable.besh, proTable.nonstop FROM proUtil left JOIN proTable ON proUtil.uid = proTable.uid UNION ALL SELECT score, uid, NULL, NULL, NULL FROM proMonth UNION ALL SELECT score, uid, NULL, NULL, NULL FROM proPER', function(err,rows){
    responseData.score = [];
    responseData.uid = [];
    responseData.run = [];
    responseData.besh = [];
    responseData.nonstop = [];

    rows.forEach(function(val){
    responseData.score.push(val.score);
    })

    rows.forEach(function(val){
    responseData.uid.push(val.uid);
    })

    rows.forEach(function(val){
    responseData.run.push(val.run);
    })

    rows.forEach(function(val){
    responseData.besh.push(val.besh);
    })
    
    rows.forEach(function(val){
    responseData.nonstop.push(val.nonstop);
    })
    

    res.json(responseData);
    console.log(responseData);
  });
});
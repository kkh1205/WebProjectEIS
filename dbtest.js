var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port     : '3306',
    user     : 'root',
    password :'123456789',
    database : 'JHDB'
});  
var app = express();  
  
connection.connect(function(err){  
if(!err) {  
    console.log("Database is connected ... \n\n");    
} else {  
    console.log("Error connecting database ... \n\n");    
}  
});  

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
app.listen(3000); 


  
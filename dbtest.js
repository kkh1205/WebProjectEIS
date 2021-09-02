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
  
app.get("/",function(request,response){  
connection.query('SELECT * from monthsales', function(err, rows, fields) {  
connection.end();  
  if (!err){  
    response.send(rows);   
    console.log('The solution is: ', rows);  
  }  
  else  
    console.log('Error while performing Query.');  
  });  
  
});  
  
app.listen(3000); 








































// const express = require('express');
// const path = require('path');
// const router = require('../server/routes/router');

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname, '..', 'DBServer/')));

// app.use('/', router);

// app.listen(PORT, () => {
//     console.log(`Check out the app at http://localhost:${PORT}`);
// });




  
// connection.connect(function(err){  
// if(!err) {  
//     console.log("Database is connected ... \n\n");    
// } else {  
//     console.log("Error connecting database ... \n\n");    
// }  
// });  


// app.listen(3000); 


  
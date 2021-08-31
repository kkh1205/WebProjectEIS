const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
 
const client = mysql.createConnection({
    host     : 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port: '3306',
    user     : 'root',
    password : '123456789',
    database : 'soyeonidb'
});
const mainPage = fs.readFileSync('index.ejs', 'utf8');
 
app.get('/', (req, res) => {
    var page = ejs.render(mainPage, {
        title: "Temporary Title",
    });
    res.send(page);
});
 
app.get('/getdata?', (req, res) => {
    
    client.query("SELECT * FROM dbtest;", function(err, result, fields){
        if(err) throw err;
        else{
            var page = ejs.render(mainPage, {
                title: "Temporary Title",
                data: result,
            });
            res.send(page);
        }
    });
});
 
app.listen(3000, () => {
    console.log('Server Running on Port 3000!');
});
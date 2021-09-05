var express = require("express");
var app = express();

var options = require("./src/option");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "eisprojectdb",
});
connection.connect();

app.use(express.static("public"));

app.listen(3000, function () {
    console.log("server start on port 3000!");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/produce.html", function (req, res) {
    var responseData = {};

    var querypro = connection.query(
        "SELECT  proUtil.uid, proUtil.score2021, proUtil.score2020, proUtil.score2019, proTable.run2021, proTable.besh2021, proTable.nonstop2021, proTable.run2020, proTable.besh2020, proTable.nonstop2020, proTable.run2019, proTable.besh2019, proTable.nonstop2019 FROM proUtil left JOIN proTable ON proUtil.uid = proTable.uid UNION ALL SELECT uid, score2021,score2020,score2019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL FROM proMonth UNION ALL SELECT uid, score2021,score2020,score2019, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL FROM proPER",
        function (err, rows) {
            responseData.uid = [];
            responseData.score2021 = [];
            responseData.run2021 = [];
            responseData.besh2021 = [];
            responseData.nonstop2021 = [];

            rows.forEach(function (val) {
                responseData.uid.push(val.uid);
            });

            rows.forEach(function (val) {
                responseData.score2021.push(val.score2021);
            });

            rows.forEach(function (val) {
                responseData.run2021.push(val.run2021);
            });

            rows.forEach(function (val) {
                responseData.besh2021.push(val.besh2021);
            });

            rows.forEach(function (val) {
                responseData.nonstop2021.push(val.nonstop2021);
            });

            responseData.score2020 = [];
            responseData.run2020 = [];
            responseData.besh2020 = [];
            responseData.nonstop2020 = [];

            rows.forEach(function (val) {
                responseData.uid.push(val.uid);
            });

            rows.forEach(function (val) {
                responseData.score2020.push(val.score2020);
            });

            rows.forEach(function (val) {
                responseData.run2020.push(val.run2020);
            });

            rows.forEach(function (val) {
                responseData.besh2020.push(val.besh2020);
            });

            rows.forEach(function (val) {
                responseData.nonstop2020.push(val.nonstop2020);
            });

            responseData.score2019 = [];
            responseData.run2019 = [];
            responseData.besh2019 = [];
            responseData.nonstop2019 = [];

            rows.forEach(function (val) {
                responseData.uid.push(val.uid);
            });

            rows.forEach(function (val) {
                responseData.score2019.push(val.score2019);
            });

            rows.forEach(function (val) {
                responseData.run2019.push(val.run2019);
            });

            rows.forEach(function (val) {
                responseData.besh2019.push(val.besh2019);
            });

            rows.forEach(function (val) {
                responseData.nonstop2019.push(val.nonstop2019);
            });

            res.json(responseData);
            console.log(responseData);
        }
    );
});

var express = require("express");
var app = express();

var options = require("./src/option");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "eisproject",
    password: "123456789",
    database: "eisprojectdb",
});
connection.connect();

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function () {
    console.log("서버가동 삼천번");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/main.html", function (req, res) {
    // 포스트방식으로 데이터쿼리 전송
    var responseData = {}; // 객체 선언
    /* KH. 데이터 가지고 오는 쿼리문. 좀 가라로 했습니다. */
    var query = connection.query(
        "SELECT production.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production left JOIN quality ON production.quarter = quality.quarter left JOIN quarterlySales_operatingProfit ON quality.quarter = quarterlySales_operatingProfit.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales UNION ALL SELECT production_2020.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production_2020 left JOIN quality_2020 ON production_2020.quarter = quality_2020.quarter left JOIN quarterlySales_operatingProfit_2020 ON quality_2020.quarter = quarterlySales_operatingProfit_2020.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales_2020 UNION ALL SELECT production_2019.quarter,A01P,A02P,A03P,A01Q,A02Q,A03Q,quarterlySales,operatingProfit,quarter1,quarter2,quarter3,quarter4 FROM production_2019 left JOIN quality_2019 ON production_2019.quarter = quality_2019.quarter left JOIN quarterlySales_operatingProfit_2019 ON quality_2019.quarter = quarterlySales_operatingProfit_2019.quarter UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,quarter1,quarter2,quarter3,quarter4 FROM sales_2019;",
        function (err, rows) {
            /* KH. 생산 */
            responseData.A01P = [];
            responseData.A02P = [];
            responseData.A03P = [];
            /* KH. 매출 */
            responseData.quarter1 = [];
            responseData.quarter2 = [];
            responseData.quarter3 = [];
            responseData.quarter4 = [];
            /* KH. 품질 */
            responseData.A01Q = [];
            responseData.A02Q = [];
            responseData.A03Q = [];
            /* KH. 매출액 & 영업이익 */
            responseData.quarterlySales = [];
            responseData.operatingProfit = [];

            if (err) throw err;
            if (rows[0]) {
                responseData.result = "ok";
                /* KH. 생산 */
                rows.forEach(function (val) {
                    responseData.A01P.push(val.A01P);
                });

                rows.forEach(function (val) {
                    responseData.A02P.push(val.A02P);
                });

                rows.forEach(function (val) {
                    responseData.A03P.push(val.A03P);
                });
                /* KH.매출 */
                rows.forEach(function (val) {
                    responseData.quarter1.push(val.quarter1);
                });
                rows.forEach(function (val) {
                    responseData.quarter2.push(val.quarter2);
                });
                rows.forEach(function (val) {
                    responseData.quarter3.push(val.quarter3);
                });
                rows.forEach(function (val) {
                    responseData.quarter4.push(val.quarter4);
                });
                /* KH.품질 */
                rows.forEach(function (val) {
                    responseData.A01Q.push(val.A01Q);
                });
                rows.forEach(function (val) {
                    responseData.A02Q.push(val.A02Q);
                });
                rows.forEach(function (val) {
                    responseData.A03Q.push(val.A03Q);
                });
                /* KH.매출액 & 영업이익 */
                rows.forEach(function (val) {
                    responseData.quarterlySales.push(val.quarterlySales);
                });
                rows.forEach(function (val) {
                    responseData.operatingProfit.push(val.operatingProfit);
                });
            } else {
                responseData.result = "none";
                /* KH.생산 */
                responseData.A01P = "";
                responseData.A02P = "";
                responseData.A03P = "";
                /* KH.매출 */
                responseData.quarter1 = "";
                responseData.quarter2 = "";
                responseData.quarter3 = "";
                responseData.quarter4 = "";
                /* KH.품질 */
                responseData.A01Q = "";
                responseData.A02Q = "";
                responseData.A03Q = "";
                /* KH.매출액 & 영업이익 */
                responseData.quarterlySales = "";
                responseData.operatingProfit = "";
            }

            /* responseData를 json으로 응답함. */
            res.json(responseData);
            console.log("success \n" + responseData);
        }
    );
});

app.post("/sales.html", function (req, res) {
    //포스트방식으로 데이터 쿼리 날리기!
    var responseData = {};
    console.log("정현이꺼");

    var query = connection.query(
        "select * from Y2021_Sales_JH RIGHT JOIN Y2020_Sales_JH ON Y2021_Sales_JH.`월별`=Y2020_Sales_JH.`월별` RIGHT JOIN Y2019_Sales_JH ON Y2020_Sales_JH.`월별` = Y2019_Sales_JH.`월별`",
        function (err, rows) {
            //2021
            responseData.score = [];
            responseData.product = [];
            responseData.nonscore = [];
            responseData.reducer = [];
            responseData.Nreducer = [];
            responseData.a380 = [];
            responseData.c550 = [];
            responseData.kf_21 = [];
            responseData.circle = [];
            //2020
            responseData.score1 = [];
            responseData.product1 = [];
            responseData.nonscore1 = [];
            responseData.reducer1 = [];
            responseData.Nreducer1 = [];
            responseData.a3801 = [];
            responseData.c5501 = [];
            responseData.kf_211 = [];
            responseData.circle1 = [];
            //2019
            responseData.score2 = [];
            responseData.product2 = [];
            responseData.nonscore2 = [];
            responseData.reducer2 = [];
            responseData.Nreducer2 = [];
            responseData.a3802 = [];
            responseData.c5502 = [];
            responseData.kf_212 = [];
            responseData.circle2 = [];
            if (err) throw err;
            if (rows[0]) {
                responseData.result = "ok";

                //2021
                rows.forEach(function (val) {
                    responseData.score.push(val.score); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.product.push(val.product); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.nonscore.push(val.nonscore); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.reducer.push(val.reducer); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.Nreducer.push(val.Nreducer); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.a380.push(val.a380); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.c550.push(val.c550); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.kf_21.push(val.kf_21); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.circle.push(val.circle); // responseData에다가 배열로 저장을 시킴
                });

                // 2020

                rows.forEach(function (val) {
                    responseData.score1.push(val.score1); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.product1.push(val.product1); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.nonscore1.push(val.nonscore1); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.reducer1.push(val.reducer1); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.Nreducer1.push(val.Nreducer1); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.a3801.push(val.a3801); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.c5501.push(val.c5501); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.kf_211.push(val.kf_211); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.circle1.push(val.circle1); // responseData에다가 배열로 저장을 시킴
                });

                // 2019

                rows.forEach(function (val) {
                    responseData.score2.push(val.score2); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.product2.push(val.product2); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.nonscore2.push(val.nonscore2); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.reducer2.push(val.reducer2); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.Nreducer2.push(val.Nreducer2); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.a3802.push(val.a3802); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.c5502.push(val.c5502); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.kf_212.push(val.kf_212); // responseData에다가 배열로 저장을 시킴
                });

                rows.forEach(function (val) {
                    responseData.circle2.push(val.circle2); // responseData에다가 배열로 저장을 시킴
                });
            } else {
                responseData.result = "none";
                responseData.score = "";
                responseData.product = "";
                responseData.nonscore = "";
                responseData.reducer = "";
                responseData.Nreducer = "";
                responseData.a380 = "";
                responseData.c550 = "";
                responseData.kf_21 = "";
                responseData.circle = "";

                responseData.score1 = "";
                responseData.product1 = "";
                responseData.nonscore1 = "";
                responseData.reducer1 = "";
                responseData.Nreducer1 = "";
                responseData.a3801 = "";
                responseData.c5501 = "";
                responseData.kf_211 = "";
                responseData.circle1 = "";

                responseData.score2 = "";
                responseData.product2 = "";
                responseData.nonscore2 = "";
                responseData.reducer2 = "";
                responseData.Nreducer2 = "";
                responseData.a3802 = "";
                responseData.c5502 = "";
                responseData.kf_212 = "";
                responseData.circle2 = "";
            }
            console.log(responseData.product);
            console.log(responseData.score);
            console.log(responseData.nonscore);
            console.log(responseData.reducer);
            console.log(responseData.Nreducer);
            console.log(responseData.a380);
            console.log(responseData.c550);
            console.log(responseData.kf_21);
            console.log(responseData.circle);

            console.log(responseData.product1);
            console.log(responseData.score1);
            console.log(responseData.nonscore1);
            console.log(responseData.reducer1);
            console.log(responseData.Nreducer1);
            console.log(responseData.a3801);
            console.log(responseData.c5501);
            console.log(responseData.kf_211);
            console.log(responseData.circle1);

            console.log(responseData.product2);
            console.log(responseData.score2);
            console.log(responseData.nonscore2);
            console.log(responseData.reducer2);
            console.log(responseData.Nreducer2);
            console.log(responseData.a3802);
            console.log(responseData.c5502);
            console.log(responseData.kf_212);
            console.log(responseData.circle2);

            res.json(responseData);
            console.log("response success!" + responseData);
        }
    );
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

app.post("/quality.html", function (req, res) {
    // 포스트방식으로 데이터쿼리 전송
    var responseData = {}; // 객체 선언

    var queryqua = connection.query(
        "SELECT gid,val2021,val2020,val2019,per2021,per2020,per2019,bill2021,bill2020,bill2019 FROM quaYear UNION SELECT gid,val2021,val2020,val2019,null,null,null,bill2021,bill2020,bill2019 FROM quaTab",
        function (err, rows) {
            responseData.gid = [];
            responseData.val2021 = [];
            responseData.per2021 = [];
            responseData.bill2021 = [];

            rows.forEach(function (val) {
                responseData.gid.push(val.gid);
            });

            rows.forEach(function (val) {
                responseData.val2021.push(val.val2021);
            });

            rows.forEach(function (val) {
                responseData.per2021.push(val.per2021);
            });

            rows.forEach(function (val) {
                responseData.bill2021.push(val.bill2021);
            });

            responseData.val2020 = [];
            responseData.per2020 = [];
            responseData.bill2020 = [];

            rows.forEach(function (val) {
                responseData.val2020.push(val.val2020);
            });

            rows.forEach(function (val) {
                responseData.per2020.push(val.per2020);
            });

            rows.forEach(function (val) {
                responseData.bill2020.push(val.bill2020);
            });

            responseData.val2019 = [];
            responseData.per2019 = [];
            responseData.bill2019 = [];

            rows.forEach(function (val) {
                responseData.val2019.push(val.val2019);
            });

            rows.forEach(function (val) {
                responseData.per2019.push(val.per2019);
            });

            rows.forEach(function (val) {
                responseData.bill2019.push(val.bill2019);
            });

            res.json(responseData);
            console.log("success \n" + responseData);
        }
    );
});

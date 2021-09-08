//직선그래프//
var chart1arr = [15, 20, 20, 25, 25, 15, 10, 30, 80, 20, 20, 35];
var chart1_1arr = [0, 5, 5, 0, 5, 5, 0, 7, 3, 3, 1, 1];
var chart2arr = [20, 25, 55, 25, 37, 3, 2, 8, 10, 130];
var chart3arr = [5, 16, 18, 10, 15, 6];
var chart4arr = [20, 25, 55, 25, 37];
var chart5arr = [2, 2, 1, 1, 1, 3, 1, 1, 3, 1, 3, 1];
var chart6arr = [2, 2, 1, 4, 1, 3, 1, 3, 3, 1, 3, 1];
var chart7arr = [10, 12, 1, 2, 3, 2, 8, 3, 7, 1, 1, 1];
var chart8arr = [0, 0, 0, 15, 0, 0, 0, 8, 0, 0, 2, 0];
var chart9arr = [10, 0, 0, 17, 0, 0, 2, 4, 4, 0, 0, 0];

var data1 = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "채권회수율(억)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(255,255,255,1)"],
            borderWidth: 1,
        },
        {
            label: "미수금(억)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255,255,255,1)"],
            borderWidth: 1,
        },
    ],
};
var ctx = document.getElementById("myChart1");
var myChart_1 = new Chart(ctx, {
    type: "bar",
    data: data1,
    options: {
        onClick: function clickHandler(evt) {
            //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함
            const points = myChart_1.getElementsAtEventForMode(
                evt,
                "nearest",
                { intersect: true },
                true
            );

            if (points.length) {
                const firstPoint = points[0];
                var label = myChart_1.data.labels[firstPoint.index]; //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value =
                    myChart_1.data.datasets[firstPoint.datasetIndex].data[
                        firstPoint.index
                    ]; //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);

                var myModal1 = new bootstrap.Modal(
                    document.getElementById("JanuaryModal")
                ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal1.show(); //sm. 모달 실행
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)",
                },
            },
        },
        scales: {
            X: {
                stacked: true,
                ticks: {
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: 10,
                },
            },
            Y: {
                stacked: true,
                grid: {
                    drawBorder: false,
                    color: "gray",
                },
                ticks: {
                    color: "black",
                    fontSize: 14,
                    beginAtzero: true,
                },
            },
        },
    },
});
var data = {
    labels: [
        "감속기",
        "NICO 감속기",
        "전자레버",
        "탄성커플링",
        "PTO",
        "사이트 트러스터",
        "조수기",
        "유압기기",
        "조타기",
        "기타",
    ],
    datasets: [
        {
            label: "제품별 매출액(억)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                "rgba(240,157,157, 0.5)", //감속기
                "rgba(101,75,190, 0.5)", //NICO 감속기
                "rgba(174,217,113, 0.5)", //전자레버
                "rgba(226,135,173, 0.5)", //탄성커플링
                "rgba(111,211,109, 0.5)", //PTO
                "rgba(181,88,191, 0.5)", //사이트 트러스터
                "rgba(123,200,207, 0.5)", //조수기
                "rgba(232,235,86, 0.5)", //유압기기
                "rgba(239,193,87, 0.5)", //조타기
                "rgba(195,143,65, 0.5)", // 기타
            ],
            borderColor: [
                "rgba(240,157,157, 1)", //감속기
                "rgba(101,75,190, 1)", //NICO 감속기
                "rgba(174,217,113, 1)", //전자레버
                "rgba(226,135,173, 1)", //탄성커플링
                "rgba(111,211,109, 1)", //PTO
                "rgba(181,88,191, 1)", //사이트 트러스터
                "rgba(123,200,207, 1)", //조수기
                "rgba(232,235,86, 1)", //유압기기
                "rgba(239,193,87, 1)", //조타기
                "rgba(195,143,65, 1)", // 기타
            ],
            borderWidth: 1,
        },
    ],
};

var option = {
    onClick: function clickHandler(evt) {
        //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함
        const points = myChart_2.getElementsAtEventForMode(
            evt,
            "nearest",
            { intersect: true },
            true
        );

        if (points.length) {
            const firstPoint = points[0];
            var label = myChart_2.data.labels[firstPoint.index]; //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
            var value =
                myChart_2.data.datasets[firstPoint.datasetIndex].data[
                    firstPoint.index
                ]; //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
            console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
            console.log(value);

            var myModal2 = new bootstrap.Modal(
                document.getElementById("productsales")
            ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
            myModal2.show(); //sm. 모달 실행
        }
    },
    animation: {
        animateScale: true,
    },

    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: "rgba(0, 0, 0, 1)",
            },
        },
    },
    scales: {
        xAxes: {
            ticks: {
                color: "rgba(0, 0, 0, 1)",
                fontSize: 10,
            },
        },
        yAxes: {
            ticks: {
                color: "black",
                fontSize: 14,
                beginAtZero: true,
            },
        },
    },
};
var ctx = document.getElementById("myChart2");
var myChart_2 = new Chart(ctx, {
    type: "bar",
    data: data,
    options: option,
});

var data3 = {
    labels: ["감속기", "NICO 감속기", "전자레버", "탄성커플링", "PTO"],
    datasets: [
        {
            data: [0, 0, 0, 0, 0],

            backgroundColor: [
                "rgba(240,157,157, 0.5)", //감속기
                "rgba(101,75,190, 0.5)", //NICO 감속기
                "rgba(174,217,113, 0.5)", //전자레버
                "rgba(226,135,173, 0.5)", //탄성커플링
                "rgba(111,211,109, 0.5)", //PTO
            ],
            borderColor: [
                "rgba(240,157,157, 1)", //감속기
                "rgba(101,75,190, 1)", //NICO 감속기
                "rgba(174,217,113, 1)", //전자레버
                "rgba(226,135,173, 1)", //탄성커플링
                "rgba(111,211,109, 1)", //PTO
            ],
        },
    ],
};

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart5").getContext("2d");

var myChart_5 = new Chart(ctx, {
    type: "polarArea",
    data: data3,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)",
                },
            },
        },
        scales: {
            yAxes: {
                ticks: {
                    color: "black",
                    fontSize: 5,
                },
            },
        },
    },
});

// 라인차트

var data2 = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "감속기",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "rgb(240,157,157)",
            tension: 0.1,
            backgroundColor: "rgb(240,157,157, 0.5)", //감속기
        },
        {
            label: "NICO 감속기",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "rgb(101,75,190)",
            tension: 0.1,
            backgroundColor: "rgb(101,75,190, 0.5)", //NICO 감속기
        },
        {
            label: "전자레버",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "rgb(174,217,113)",
            tension: 0.1,
            backgroundColor: "rgb(174,217,113, 0.5)", //전자레버
        },
        {
            label: "탄성커플링",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "rgb(226,135,173)",
            tension: 0.1,
            backgroundColor: "rgb(226,135,173, 0.5)", //탄성커플링
        },
        {
            label: "PTO",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false,
            borderColor: "rgb(111,211,109)",
            tension: 0.1,
            backgroundColor: "rgb(111,211,109, 0.5)", //PTO
        },
    ],
};
var ctx = document.getElementById("myChart6").getContext("2d");

var myChart_6 = new Chart(ctx, {
    type: "line",
    data: data2,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)",
                },
            },
        },
        scales: {
            X: {
                ticks: {
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: 10,
                },
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray",
                },
                ticks: {
                    color: "black",
                    fontSize: 14,
                    beginAtZero: true,
                },
            },
        },
    },
});

window.onload = function () {
    sendAjax2021("https://eissistem.herokuapp.com/sales.html");
};

function sendAjax2021(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url); // http 메서드 지정 및 접속할 url 입력
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입, json 이라고  알려주는거임
    oReq.send(); // 그걸 보냄.

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);

        var product = result.product;
        var score = result.score;
        var nonscore = result.nonscore;
        var reducer = result.reducer;
        var Nreducer = result.Nreducer;
        var a380 = result.a380;
        var c550 = result.c550;
        var kf_21 = result.kf_21;
        var circle = result.circle;
        var comp_data = data.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data2 = data1.datasets[1].data;
        var comp_data3 = data2.datasets[0].data;
        var comp_data4 = data2.datasets[1].data;
        var comp_data5 = data2.datasets[2].data;
        var comp_data6 = data2.datasets[3].data;
        var comp_data7 = data2.datasets[4].data;
        var comp_data8 = data3.datasets[0].data;

        for (var i = 0; i < comp_data.length; i++) {
            comp_data[i] = product[i];
        }

        for (var i = 0; i < comp_data1.length; i++) {
            comp_data1[i] = score[i];
        }

        for (var i = 0; i < comp_data2.length; i++) {
            comp_data2[i] = nonscore[i];
        }

        for (var i = 0; i < comp_data3.length; i++) {
            comp_data3[i] = reducer[i];
        }

        for (var i = 0; i < comp_data4.length; i++) {
            comp_data4[i] = Nreducer[i];
        }

        for (var i = 0; i < comp_data5.length; i++) {
            comp_data5[i] = a380[i];
        }

        for (var i = 0; i < comp_data6.length; i++) {
            comp_data6[i] = c550[i];
        }

        for (var i = 0; i < comp_data7.length; i++) {
            comp_data7[i] = kf_21[i];
        }

        for (var i = 0; i < 5; i++) {
            comp_data8[i] = circle[i];
        }

        data.datasets[0].data = comp_data;
        data1.datasets[0].data = comp_data1;
        data1.datasets[1].data = comp_data2;
        data2.datasets[0].data = comp_data3;
        data2.datasets[1].data = comp_data4;
        data2.datasets[2].data = comp_data5;
        data2.datasets[3].data = comp_data6;
        data2.datasets[4].data = comp_data7;
        data3.datasets[0].data = comp_data8;
        myChart_1.update();
        myChart_2.update();
        myChart_6.update();
        myChart_5.update();
        document.querySelector("#allprice").innerHTML = "$ 42,000,000";
        document.querySelector("#allpriceper").innerHTML = "$ 2,300,000";
        document.querySelector("#allpriceper1").innerHTML = " 80 %";
        document.querySelector("#allpriceper2").innerHTML = "$ 300,000";
    });
}

function sendAjax2020(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url); // http 메서드 지정 및 접속할 url 입력
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입, json 이라고  알려주는거임
    oReq.send(); // 그걸 보냄.

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);

        var product1 = result.product1;
        var score1 = result.score1;
        var nonscore1 = result.nonscore1;
        var reducer1 = result.reducer1;
        var Nreducer1 = result.Nreducer1;
        var a3801 = result.a3801;
        var c5501 = result.c5501;
        var kf_211 = result.kf_211;
        var circle1 = result.circle1;
        var comp_data = data.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data2 = data1.datasets[1].data;
        var comp_data3 = data2.datasets[0].data;
        var comp_data4 = data2.datasets[1].data;
        var comp_data5 = data2.datasets[2].data;
        var comp_data6 = data2.datasets[3].data;
        var comp_data7 = data2.datasets[4].data;
        var comp_data8 = data3.datasets[0].data;

        for (var i = 0; i < comp_data.length; i++) {
            comp_data[i] = product1[i];
        }

        for (var i = 0; i < comp_data1.length; i++) {
            comp_data1[i] = score1[i];
        }

        for (var i = 0; i < comp_data2.length; i++) {
            comp_data2[i] = nonscore1[i];
        }

        for (var i = 0; i < comp_data3.length; i++) {
            comp_data3[i] = reducer1[i];
        }

        for (var i = 0; i < comp_data4.length; i++) {
            comp_data4[i] = Nreducer1[i];
        }

        for (var i = 0; i < comp_data5.length; i++) {
            comp_data5[i] = a3801[i];
        }

        for (var i = 0; i < comp_data6.length; i++) {
            comp_data6[i] = c5501[i];
        }

        for (var i = 0; i < comp_data7.length; i++) {
            comp_data7[i] = kf_211[i];
        }

        for (var i = 0; i < 5; i++) {
            comp_data8[i] = circle1[i];
        }

        data.datasets[0].data = comp_data;
        data1.datasets[0].data = comp_data1;
        data1.datasets[1].data = comp_data2;
        data2.datasets[0].data = comp_data3;
        data2.datasets[1].data = comp_data4;
        data2.datasets[2].data = comp_data5;
        data2.datasets[3].data = comp_data6;
        data2.datasets[4].data = comp_data7;
        data3.datasets[0].data = comp_data8;
        myChart_1.update();
        myChart_2.update();
        myChart_6.update();
        myChart_5.update();
    });
}

function sendAjax2019(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url); // http 메서드 지정 및 접속할 url 입력
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입, json 이라고  알려주는거임
    oReq.send(); // 그걸 보냄.

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);

        var product2 = result.product2;
        var score2 = result.score2;
        var nonscore2 = result.nonscore2;
        var reducer2 = result.reducer2;
        var Nreducer2 = result.Nreducer2;
        var a3802 = result.a3802;
        var c5502 = result.c5502;
        var kf_212 = result.kf_212;
        var circle2 = result.circle2;
        var comp_data = data.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data2 = data1.datasets[1].data;
        var comp_data3 = data2.datasets[0].data;
        var comp_data4 = data2.datasets[1].data;
        var comp_data5 = data2.datasets[2].data;
        var comp_data6 = data2.datasets[3].data;
        var comp_data7 = data2.datasets[4].data;
        var comp_data8 = data3.datasets[0].data;

        for (var i = 0; i < comp_data.length; i++) {
            comp_data[i] = product2[i];
        }

        for (var i = 0; i < comp_data1.length; i++) {
            comp_data1[i] = score2[i];
        }

        for (var i = 0; i < comp_data2.length; i++) {
            comp_data2[i] = nonscore2[i];
        }

        for (var i = 0; i < comp_data3.length; i++) {
            comp_data3[i] = reducer2[i];
        }

        for (var i = 0; i < comp_data4.length; i++) {
            comp_data4[i] = Nreducer2[i];
        }

        for (var i = 0; i < comp_data5.length; i++) {
            comp_data5[i] = a3802[i];
        }

        for (var i = 0; i < comp_data6.length; i++) {
            comp_data6[i] = c5502[i];
        }

        for (var i = 0; i < comp_data7.length; i++) {
            comp_data7[i] = kf_212[i];
        }

        for (var i = 0; i < 5; i++) {
            comp_data8[i] = circle2[i];
        }

        data.datasets[0].data = comp_data;
        data1.datasets[0].data = comp_data1;
        data1.datasets[1].data = comp_data2;
        data2.datasets[0].data = comp_data3;
        data2.datasets[1].data = comp_data4;
        data2.datasets[2].data = comp_data5;
        data2.datasets[3].data = comp_data6;
        data2.datasets[4].data = comp_data7;
        data3.datasets[0].data = comp_data8;
        myChart_1.update();
        myChart_2.update();
        myChart_6.update();
        myChart_5.update();
    });
}

function yearSelect(year) {
    switch (year) {
        case "2021":
            sendAjax2021("https://eissistem.herokuapp.com/sales.html");
            document.querySelector("#allprice").innerHTML = "$ 42,000,000";
            document.querySelector("#allpriceper").innerHTML = "$ 2,300,000";
            break;

        case "2020":
            sendAjax2020("https://eissistem.herokuapp.com/sales.html");
            document.querySelector("#allprice").innerHTML = "$ 51,424,000";
            document.querySelector("#allpriceper").innerHTML = "$ 5,524,000";
            document.querySelector("#allpriceper1").innerHTML = " 90 %";
            document.querySelector("#allpriceper2").innerHTML = "$ 100,000";
            break;

        case "2019":
            sendAjax2019("https://eissistem.herokuapp.com/sales.html");
            document.querySelector("#allprice").innerHTML = "$ 34,524,000";
            document.querySelector("#allpriceper").innerHTML = "$ 7,754,000";
            document.querySelector("#allpriceper1").innerHTML = " 100 %";
            document.querySelector("#allpriceper2").innerHTML = "$ 0";
            break;

        default:
    }
}

var statUid = [];
var statRun2021 = [];
var statBesh2021 = [];
var statNonstop2021 = [];

var statRun2020 = [];
var statBesh2020 = [];
var statNonstop2020 = [];

var statRun2019 = [];
var statBesh2019 = [];
var statNonstop2019 = [];
var tru2021 = [];
var tru2020 = [];
var tru2019 = [];
var cha2021 = [];
var cha2020 = [];
var cha2019 = [];
var wor2021 = [];
var wor2020 = [];
var wor2019 = [];
var mar2021 = [];
var mar2020 = [];
var mar2019 = [];
var nin2021 = [];
var nin2020 = [];
var nin2019 = [];
var air2021 = [];
var air2020 = [];
var air2019 = [];

var data1 = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "월별 생산액(억 원)",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [0, 0, 0, 0, 0, 0, 0],
            fill: false,
        },
    ],
};

var data2 = {
    labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
    datasets: [
        {
            label: "가동률(%)",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            borderWidth: 1,
        },
    ],
};

var data3 = {
    labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
    datasets: [
        {
            label: "가동률(%)",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            borderWidth: 1,
        },
    ],
};

var data4 = {
    labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
    datasets: [
        {
            label: "비율",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
            borderWidth: 1,
        },
    ],
};

var data5 = {
    labels: [
        "기기 이상",
        "품목 변경",
        "작업자 미숙",
        "원자재 교체",
        "끼임 발생",
        "에어 공급 부족",
    ],
    datasets: [
        {
            label: "가동 저해사유",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            borderWidth: 1,
        },
    ],
};

//직선그래프//

var ctx = document.getElementById("myChart1");
var myChart_1 = new Chart(ctx, {
    type: "line",

    data: data1,

    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                },
            },
        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    font: { size: 10 },
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
                },
            },
        },
    },
});

//막대차트

// 컨텍스트
var ctx = document.getElementById("myChart2").getContext("2d");
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/

var myChart_2 = new Chart(ctx, {
    type: "bar",
    data: data2,
    options: {
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

                var seqcence = myChart_2.data.labels.indexOf(label);
                console.log(seqcence);
                document.querySelector("#nn").innerHTML = statUid[seqcence];
                document.querySelector("#rr").innerHTML = statRun2021[seqcence];
                document.querySelector("#bb").innerHTML =
                    statBesh2021[seqcence];
                document.querySelector("#nono").innerHTML =
                    statNonstop2021[seqcence];
                var valueee = document.getElementById("allTypeList").value;
                console.log(valueee);
                switch (valueee) {
                    case "2021":
                        document.querySelector("#rr").innerHTML =
                            statRun2021[seqcence];
                        document.querySelector("#bb").innerHTML =
                            statBesh2021[seqcence];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2021[seqcence];
                        break;
                    case "2020":
                        document.querySelector("#rr").innerHTML =
                            statRun2020[seqcence];
                        document.querySelector("#bb").innerHTML =
                            statBesh2020[seqcence];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2020[seqcence];
                        break;
                    case "2019":
                        document.querySelector("#rr").innerHTML =
                            statRun2019[seqcence];
                        document.querySelector("#bb").innerHTML =
                            statBesh2019[seqcence];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2019[seqcence];
                        break;
                }

                console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(
                    document.getElementById("exampleModal")
                ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                document.querySelector("#ModalLabel").innerHTML =
                    label + " 가동률 지표";
                myModal.show(); //sm. 모달 실행

                for (var j = 0; j < data5.datasets[0].data.length; j++) {
                    data5.datasets[0].data[j] = Math.floor(Math.random() * 10);
                }

                myChart_5.update();
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                },
            },
        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    font: { size: 10 },
                },
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray",
                },
                ticks: {
                    color: "white",
                    font: { size: 10 },
                },
            },
        },
    },
});

// 우선 컨텍스트를 가져옵니다.
var ctx = document.getElementById("myChart3").getContext("2d");
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_3 = new Chart(ctx, {
    type: "bar",
    data: data3,
    options: {
        onClick: function clickHandler(evt) {
            //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함
            const points = myChart_3.getElementsAtEventForMode(
                evt,
                "nearest",
                { intersect: true },
                true
            );

            if (points.length) {
                const firstPoint = points[0];
                var label = myChart_3.data.labels[firstPoint.index]; //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value =
                    myChart_3.data.datasets[firstPoint.datasetIndex].data[
                        firstPoint.index
                    ]; //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기

                var seqcence = myChart_3.data.labels.indexOf(label);
                console.log(seqcence);
                document.querySelector("#nn").innerHTML = statUid[seqcence + 6];
                document.querySelector("#rr").innerHTML =
                    statRun2021[seqcence + 6];
                document.querySelector("#bb").innerHTML =
                    statBesh2021[seqcence + 6];
                document.querySelector("#nono").innerHTML =
                    statNonstop2021[seqcence + 6];
                var valueee = document.getElementById("allTypeList").value;
                console.log(valueee);
                switch (valueee) {
                    case "2021":
                        document.querySelector("#rr").innerHTML =
                            statRun2021[seqcence + 6];
                        document.querySelector("#bb").innerHTML =
                            statBesh2021[seqcence + 6];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2021[seqcence + 6];
                        break;
                    case "2020":
                        document.querySelector("#rr").innerHTML =
                            statRun2020[seqcence + 6];
                        document.querySelector("#bb").innerHTML =
                            statBesh2020[seqcence + 6];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2020[seqcence + 6];
                        break;
                    case "2019":
                        document.querySelector("#rr").innerHTML =
                            statRun2019[seqcence + 6];
                        document.querySelector("#bb").innerHTML =
                            statBesh2019[seqcence + 6];
                        document.querySelector("#nono").innerHTML =
                            statNonstop2019[seqcence + 6];
                        break;
                }
                console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(
                    document.getElementById("exampleModal")
                ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                document.querySelector("#ModalLabel").innerHTML =
                    label + " 가동률 지표";
                myModal.show(); //sm. 모달 실행

                for (var j = 0; j < data5.datasets[0].data.length; j++) {
                    data5.datasets[0].data[j] = Math.floor(Math.random() * 10);
                }

                myChart_5.update();
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                },
            },
        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    fontSize: 10,
                },
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray",
                },

                ticks: {
                    color: "white",
                    fontSize: 14,
                },
            },
        },
    },
});

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart4").getContext("2d");

var myChart_4 = new Chart(ctx, {
    type: "radar",
    data: data4,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                    display: false,
                },
            },
        },
        scales: {
            Y: {
                ticks: {
                    color: "black",
                    fontSize: 14,
                },
            },
        },
    },
});

//A-12 정지사유 차트

// 컨텍스트
var ctx = document.getElementById("myChart5").getContext("2d");
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/

var myChart_5 = new Chart(ctx, {
    type: "bar",
    data: data5,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                },
            },
        },
        scales: {
            X: {
                ticks: {
                    color: "black",
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
                },
            },
        },
    },
});

window.onload = function () {
    sendAjax2021("https://eissistem.herokuapp.com/produce.html");
};

function sendAjax2021(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url);
    oReq.setRequestHeader("Content-Type", "application/json"); // json 형태로 보낸다
    oReq.send();

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var score2021 = result.score2021;
        console.log(score2021[0]);
        var uid = result.uid;
        var run2021 = result.run2021;
        var besh2021 = result.besh2021;
        var nonstop2021 = result.nonstop2021;

        statUid = uid;
        statRun2021 = run2021;
        statBesh2021 = besh2021;
        statNonstop2021 = nonstop2021;

        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data4 = data4.datasets[0].data;
        var name_data2 = data2.labels;
        var name_data3 = data3.labels;
        var name_data1 = data1.labels;
        var name_data4 = data4.labels;

        for (var i = 0; i < 6; i++) {
            comp_data2[i] = score2021[i];
            name_data2[i] = uid[i];
            console.log("2 :" + score2021[i]);
        }
        for (var i = 6; i < 12; i++) {
            comp_data3[i - 6] = score2021[i];
            name_data3[i - 6] = uid[i];

            console.log("3 :" + score2021[i]);
        }
        for (var i = 12; i < 24; i++) {
            comp_data1[i - 12] = score2021[i];
            name_data1[i - 12] = uid[i];

            console.log("1 :" + score2021[i]);
        }
        for (var i = 24; i < 30; i++) {
            comp_data4[i - 24] = score2021[i];
            name_data4[i - 24] = uid[i];

            console.log("4 :" + score2021[i]);
        }

        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;
        data1.datasets[0].data = comp_data1;
        data4.datasets[0].data = comp_data4;
        data2.labels = name_data2;
        data3.labels = name_data3;
        data1.labels = name_data1;
        data4.labels = name_data4;

        myChart_2.update();
        myChart_3.update();
        myChart_1.update();
        myChart_4.update();

        for (var i = 0; i < 12; i++) {
            console.log(uid[i]);
            document.querySelector(`#n${i + 1}`).innerHTML = uid[i];
        }
        for (var i = 0; i < 12; i++) {
            console.log(run2021[i]);
            document.querySelector(`#r${i + 1}`).innerHTML = run2021[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(besh2021[i]);
            document.querySelector(`#b${i + 1}`).innerHTML = besh2021[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(nonstop2021[i]);
            document.querySelector(`#no${i + 1}`).innerHTML =
                nonstop2021[i] + " %";
        }
        document.querySelector("#allprice").innerHTML = "$ 40,000,000";
        document.querySelector("#allpriceper").innerHTML = "$ 4,000,000";
    });
}

function sendAjax2020(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url);
    oReq.setRequestHeader("Content-Type", "application/json"); // json 형태로 보낸다
    oReq.send();

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var score2020 = result.score2020;
        console.log(score2020[0]);
        var uid = result.uid;
        var run2020 = result.run2020;
        var besh2020 = result.besh2020;
        var nonstop2020 = result.nonstop2020;

        statRun2020 = run2020;
        statBesh2020 = besh2020;
        statNonstop2020 = nonstop2020;

        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data4 = data4.datasets[0].data;
        var name_data2 = data2.labels;
        var name_data3 = data3.labels;
        var name_data1 = data1.labels;
        var name_data4 = data4.labels;

        for (var i = 0; i < 6; i++) {
            comp_data2[i] = score2020[i];
            name_data2[i] = uid[i];
            console.log("2 :" + score2020[i]);
        }
        for (var i = 6; i < 12; i++) {
            comp_data3[i - 6] = score2020[i];
            name_data3[i - 6] = uid[i];

            console.log("3 :" + score2020[i]);
        }
        for (var i = 12; i < 24; i++) {
            comp_data1[i - 12] = score2020[i];
            name_data1[i - 12] = uid[i];

            console.log("1 :" + score2020[i]);
        }
        for (var i = 24; i < 30; i++) {
            comp_data4[i - 24] = score2020[i];
            name_data4[i - 24] = uid[i];

            console.log("4 :" + score2020[i]);
        }

        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;
        data1.datasets[0].data = comp_data1;
        data4.datasets[0].data = comp_data4;
        data2.labels = name_data2;
        data3.labels = name_data3;
        data1.labels = name_data1;
        data4.labels = name_data4;

        myChart_2.update();
        myChart_3.update();
        myChart_1.update();
        myChart_4.update();

        for (var i = 0; i < 12; i++) {
            console.log(uid[i]);
            document.querySelector(`#n${i + 1}`).innerHTML = uid[i];
        }
        for (var i = 0; i < 12; i++) {
            console.log(run2020[i]);
            document.querySelector(`#r${i + 1}`).innerHTML = run2020[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(besh2020[i]);
            document.querySelector(`#b${i + 1}`).innerHTML = besh2020[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(nonstop2020[i]);
            document.querySelector(`#no${i + 1}`).innerHTML =
                nonstop2020[i] + " %";
        }
    });
}

function sendAjax2019(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url);
    oReq.setRequestHeader("Content-Type", "application/json"); // json 형태로 보낸다
    oReq.send();

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var score2019 = result.score2019;
        console.log(score2019[0]);
        var uid = result.uid;
        var run2019 = result.run2019;
        var besh2019 = result.besh2019;
        var nonstop2019 = result.nonstop2019;

        statRun2019 = run2019;
        statBesh2019 = besh2019;
        statNonstop2019 = nonstop2019;

        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data4 = data4.datasets[0].data;
        var name_data2 = data2.labels;
        var name_data3 = data3.labels;
        var name_data1 = data1.labels;
        var name_data4 = data4.labels;

        for (var i = 0; i < 6; i++) {
            comp_data2[i] = score2019[i];
            name_data2[i] = uid[i];
            console.log("2 :" + score2019[i]);
        }
        for (var i = 6; i < 12; i++) {
            comp_data3[i - 6] = score2019[i];
            name_data3[i - 6] = uid[i];

            console.log("3 :" + score2019[i]);
        }
        for (var i = 12; i < 24; i++) {
            comp_data1[i - 12] = score2019[i];
            name_data1[i - 12] = uid[i];

            console.log("1 :" + score2019[i]);
        }
        for (var i = 24; i < 30; i++) {
            comp_data4[i - 24] = score2019[i];
            name_data4[i - 24] = uid[i];

            console.log("4 :" + score2019[i]);
        }

        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;
        data1.datasets[0].data = comp_data1;
        data4.datasets[0].data = comp_data4;
        data2.labels = name_data2;
        data3.labels = name_data3;
        data1.labels = name_data1;
        data4.labels = name_data4;

        myChart_2.update();
        myChart_3.update();
        myChart_1.update();
        myChart_4.update();

        for (var i = 0; i < 12; i++) {
            console.log(uid[i]);
            document.querySelector(`#n${i + 1}`).innerHTML = uid[i];
        }
        for (var i = 0; i < 12; i++) {
            console.log(run2019[i]);
            document.querySelector(`#r${i + 1}`).innerHTML = run2019[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(besh2019[i]);
            document.querySelector(`#b${i + 1}`).innerHTML = besh2019[i] + " %";
        }
        for (var i = 0; i < 12; i++) {
            console.log(nonstop2019[i]);
            document.querySelector(`#no${i + 1}`).innerHTML =
                nonstop2019[i] + " %";
        }
    });
}

function yearSelect(year) {
    switch (year) {
        case "2021":
            console.log("좀돼라");
            sendAjax2021("https://eissistem.herokuapp.com/produce.html");
            document.querySelector("#allprice").innerHTML = "$ 40,000,000";
            document.querySelector("#allpriceper").innerHTML = "$ 4,000,000";

            break;
        case "2020":
            console.log("좀돼라");
            document.querySelector("#allprice").innerHTML = "$ 25,152,000";
            document.querySelector("#allpriceper").innerHTML = "$ 2,351,000";

            sendAjax2020("https://eissistem.herokuapp.com/produce.html");
            break;
        case "2019":
            console.log("좀돼라");
            document.querySelector("#allprice").innerHTML = "$ 64,232,000";
            document.querySelector("#allpriceper").innerHTML = "$ 3,474,500";

            sendAjax2019("https://eissistem.herokuapp.com/produce.html");
            break;
        default:
            console.log("안된다");
    }
}

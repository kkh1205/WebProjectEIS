var listGid = [];
var listVal2021 = [];
var listPer2021 = [];
var listBill2021 = [];

var listVal2020 = [];
var listPer2020 = [];
var listBill2020 = [];

var listVal2019 = [];
var listPer2019 = [];
var listBill2019 = [];

//생산계획 데이터
var data = {
    labels: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ],
    datasets: [
        {
            label: "비용",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: true,
        },
    ],
};

//품질이력 데이터
var data2 = {
    labels: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ],
    datasets: [
        {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            datalabels: {
                align: "end",
                anchor: "start",
            },
            backgroundColor: [
                "rgba(36, 192, 209)",
                "rgba(36, 192, 209)",
                "rgba(36, 192, 209)",

                "rgba(36, 151, 209)",
                "rgba(36, 151, 209)",
                "rgba(36, 151, 209)",

                "rgba(82, 36, 209)",
                "rgba(82, 36, 209)",
                "rgba(82, 36, 209)",

                "rgba(172, 36, 209)",
                "rgba(172, 36, 209)",
                "rgba(172, 36, 209)",
            ],
        },
    ],
};

//품질검사 데이터
var data3 = {
    labels: ["QI01", "QI02", "QI03", "QI04"],
    datasets: [
        {
            data: [0, 0, 0, 0],
            label: "비용",
            backgroundColor: [
                "rgba(36, 192, 209)",
                "rgba(36, 151, 209)",
                "rgba(82, 36, 209)",

                "rgba(172, 36, 209)",
            ],
            borderColor: [
                "rgba(36, 192, 209)",
                "rgba(36, 151, 209)",
                "rgba(82, 36, 209)",
                "rgba(114, 36, 209)",
                "rgba(154, 36, 209)",
                "rgba(172, 36, 209)",
            ],
            borderWidth: 1,
        },
    ],
};

//기본 옵션
var options = {
    responsive: true,
    plugins: {},
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
            },
        },
        y: {
            beginAtZero: true,
            display: true,
            title: {
                display: true,
            },
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                    return value + "만원";
                },
            },
        },
    },
};

//생산계획 차트
var ctx = document.getElementById("chartsy1").getContext("2d");
var mychart1 = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
});

// 품질이력 차트
var ctx = document.getElementById("chartsy2").getContext("2d");
var myChart2 = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "bar",
    data: data2,
    options: {
        onClick: function clickHandler(evt) {
            //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함
            const points = myChart2.getElementsAtEventForMode(
                evt,
                "nearest",
                { intersect: true },
                true
            );

            if (points.length) {
                const firstPoint = points[0];
                var label = myChart2.data.labels[firstPoint.index]; //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value =
                    myChart2.data.datasets[firstPoint.datasetIndex].data[
                        firstPoint.index
                    ]; //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기

                var seqcence = myChart2.data.labels.indexOf(label);
                console.log(seqcence);
                document.querySelector("#kk1").innerHTML =
                    listPer2021[seqcence + 1];
                document.querySelector("#ss1").innerHTML =
                    listPer2021[seqcence + 2];
                document.querySelector("#yy1").innerHTML =
                    listPer2021[seqcence + 3];

                var valueyear = document.getElementById("allTypeList").value;
                console.log(valueyear);
                switch (valueyear) {
                    case "2021":
                        document.querySelector("#kk4").innerHTML = "40.7%";
                        document.querySelector("#ss4").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#yy4").innerHTML = "72.4%";
                        document.querySelector("#kk5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#ss5").innerHTML = "30.2%";
                        document.querySelector("#yy5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#kk6").innerHTML = "20.9%";
                        document.querySelector("#ss6").innerHTML = "41.6%";
                        document.querySelector("#yy6").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        break;
                    case "2020":
                        document.querySelector("#kk4").innerHTML = "30.4%";
                        document.querySelector("#ss4").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#yy4").innerHTML = "82.5%";
                        document.querySelector("#kk5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#ss5").innerHTML = "20.3%";
                        document.querySelector("#yy5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#kk6").innerHTML = "17.9";
                        document.querySelector("#ss6").innerHTML = "82.7%";
                        document.querySelector("#yy6").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        break;
                    case "2019":
                        document.querySelector("#kk4").innerHTML = "10.7%";
                        document.querySelector("#ss4").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#yy4").innerHTML = "78.1%";
                        document.querySelector("#kk5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#ss5").innerHTML = "30.9%";
                        document.querySelector("#yy5").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#kk6").innerHTML = "84.1%";
                        document.querySelector("#ss6").innerHTML = "91.5%";
                        document.querySelector("#yy6").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        break;
                }
                console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(
                    document.getElementById("exampleModal2")
                ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                document.querySelector("#ModalLabel2").innerHTML =
                    label + " 평가 등급";

                myModal.show(); //sm. 모달 실행
            }
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return value + "%";
                    },
                },
                plugins: {
                    datalabels: {
                        formatter: function (value, context) {
                            return context.chart.data.labels[context.dataIndex];
                        },
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

// 품질검사 차트랑 모달
var ctx = document.getElementById("chartsy3").getContext("2d");
var myChart3 = new Chart(ctx, {
    type: "doughnut",
    data: data3,
    options: {
        onClick: function clickHandler(evt) {
            //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함
            const points = myChart3.getElementsAtEventForMode(
                evt,
                "nearest",
                { intersect: true },
                true
            );

            if (points.length) {
                const firstPoint = points[0];
                var label = myChart3.data.labels[firstPoint.index]; //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value =
                    myChart3.data.datasets[firstPoint.datasetIndex].data[
                        firstPoint.index
                    ]; //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기

                var seqcence = myChart3.data.labels.indexOf(label);
                console.log(seqcence);
                document.querySelector("#kk1").innerHTML =
                    listPer2021[seqcence + 1];
                document.querySelector("#ss1").innerHTML =
                    listPer2021[seqcence + 2];
                document.querySelector("#yy1").innerHTML =
                    listPer2021[seqcence + 3];

                var valueyear = document.getElementById("allTypeList").value;
                console.log(valueyear);
                switch (valueyear) {
                    case "2021":
                        document.querySelector("#kk1").innerHTML =
                            listPer2021[seqcence + 0] + "%";
                        document.querySelector("#ss1").innerHTML =
                            listPer2021[seqcence + 1] + "%";
                        document.querySelector("#yy1").innerHTML =
                            listPer2021[seqcence + 2] + "%";
                        document.querySelector("#kk2").innerHTML =
                            listPer2021[seqcence + 3] + "%";
                        document.querySelector("#ss2").innerHTML =
                            listPer2021[seqcence + 4] + "%";
                        document.querySelector("#yy2").innerHTML =
                            listPer2021[seqcence + 5] + "%";
                        document.querySelector("#kk3").innerHTML =
                            listPer2021[seqcence + 6] + "%";
                        document.querySelector("#ss3").innerHTML =
                            listPer2021[seqcence + 7] + "%";
                        document.querySelector("#yy3").innerHTML =
                            listPer2021[seqcence + 8] + "%";
                        break;
                    case "2020":
                        document.querySelector("#kk1").innerHTML =
                            listPer2020[seqcence + 0] + "%";
                        document.querySelector("#ss1").innerHTML =
                            listPer2020[seqcence + 1] + "%";
                        document.querySelector("#yy1").innerHTML =
                            listPer2020[seqcence + 2] + "%";
                        document.querySelector("#kk2").innerHTML =
                            listPer2020[seqcence + 3] + "%";
                        document.querySelector("#ss2").innerHTML =
                            listPer2020[seqcence + 4] + "%";
                        document.querySelector("#yy2").innerHTML =
                            listPer2020[seqcence + 5] + "%";
                        document.querySelector("#kk3").innerHTML =
                            listPer2020[seqcence + 6] + "%";
                        document.querySelector("#ss3").innerHTML =
                            listPer2020[seqcence + 7] + "%";
                        document.querySelector("#yy3").innerHTML =
                            listPer2020[seqcence + 8] + "%";
                        break;
                    case "2019":
                        document.querySelector("#kk1").innerHTML =
                            listPer2019[seqcence + 0] + "%";
                        document.querySelector("#ss1").innerHTML =
                            listPer2019[seqcence + 1] + "%";
                        document.querySelector("#yy1").innerHTML =
                            listPer2019[seqcence + 2] + "%";
                        document.querySelector("#kk2").innerHTML =
                            listPer2019[seqcence + 3] + "%";
                        document.querySelector("#ss2").innerHTML =
                            listPer2019[seqcence + 4] + "%";
                        document.querySelector("#yy2").innerHTML =
                            listPer2019[seqcence + 5] + "%";
                        document.querySelector("#kk3").innerHTML =
                            listPer2019[seqcence + 6] + "%";
                        document.querySelector("#ss3").innerHTML =
                            listPer2019[seqcence + 7] + "%";
                        document.querySelector("#yy3").innerHTML =
                            listPer2019[seqcence + 8] + "%";
                        break;
                }
                console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(
                    document.getElementById("exampleModal1")
                ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                document.querySelector("#ModalLabel1").innerHTML =
                    label + " 가동률 지표";

                myModal.show(); //sm. 모달 실행
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    },
});

window.onload = function () {
    sendAjax2021("https://eissistem.herokuapp.com/quality.html");
};

// 해당 창이 켜질 때, sandAjax를 호출.
function sendAjax2021(url) {
    var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

    oReq.open("POST", url); // url로부터 받는 데이터 형식이 POST라고 선언
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입을 json이라 알려줌.
    oReq.send(); // 그걸 보냄

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var val2021 = result.val2021;
        var val2020 = result.val2020;
        var val2019 = result.val2019;

        console.log(val2021[0]);
        var gid = result.gid;

        var per2021 = result.per2021;
        var per2020 = result.per2020;
        var per2019 = result.per2019;

        var bill2021 = result.bill2021;
        var bill2020 = result.bill2020;
        var bill2019 = result.bill2019;

        listGid = gid;
        listVal2021 = val2021;
        listPer2021 = per2021;
        listBill2021 = bill2021;

        var comp_data = data.datasets[0].data;
        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;

        // var name_data = data.labels;
        // var name_data2 = data2.labels;

        for (var i = 0; i < 12; i++) {
            comp_data[i] = val2021[i];
            // name_data[i] = gid[i];
            console.log("1 :" + val2021[i]);
        }
        for (var i = 0; i < 12; i++) {
            comp_data2[i] = per2021[i];
            // name_data2[i] = gid[i];
            console.log("2 :" + per2021[i]);
        }
        for (var i = 0; i < 4; i++) {
            comp_data3[i] = per2021[i];
            // name_data2[i] = gid[i];
            console.log("3 :" + per2021[i]);
        }
        data.datasets[0].data = comp_data;
        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;

        // data.labels = name_data;
        // data.labels = name_data2;
        mychart1.update();
        myChart2.update();
        myChart3.update();

        for (var i = 12; i < 15; i++) {
            console.log(val2021[i]);
            document.querySelector(`#k${i - 11}`).innerHTML =
                val2021[i] + "PPM";
        }
        for (var i = 12; i < 15; i++) {
            console.log(val2020[i]);
            document.querySelector(`#s${i - 11}`).innerHTML =
                val2020[i] + "PPM";
        }
        for (var i = 12; i < 15; i++) {
            console.log(val2019[i]);
            document.querySelector(`#y${i - 11}`).innerHTML =
                val2019[i] + "PPM";
        }

        for (var i = 12; i < 15; i++) {
            console.log(bill2021[i]);
            document.querySelector(`#k${i - 8}`).innerHTML =
                bill2021[i] + "만원";
        }
        for (var i = 12; i < 15; i++) {
            console.log(bill2020[i]);
            document.querySelector(`#s${i - 8}`).innerHTML =
                bill2020[i] + "만원";
        }
        for (var i = 12; i < 15; i++) {
            console.log(bill2019[i]);
            document.querySelector(`#y${i - 8}`).innerHTML =
                bill2019[i] + "만원";
        }

        for (var i = 0; i < 3; i++) {
            console.log(per2021[i]);
            document.querySelector(`#k${i + 7}`).innerHTML = per2021[i] + "%";
        }
        for (var i = 0; i < 3; i++) {
            console.log(per2020[i]);
            document.querySelector(`#s${i + 7}`).innerHTML = per2020[i] + "%";
        }
        for (var i = 0; i < 3; i++) {
            console.log(per2019[i]);
            document.querySelector(`#y${i + 7}`).innerHTML = per2019[i] + "%";
        }

        console.log(val2021[10]);
        document.querySelector(`#k${10}`).innerHTML = val2021[10] + "만원";
        console.log(val2020[10]);
        document.querySelector(`#s${10}`).innerHTML = val2020[10] + "만원";
        console.log(val2019[10]);
        document.querySelector(`#y${10}`).innerHTML = val2019[10] + "만원";
    });
}

// 해당 창이 켜질 때, sandAjax를 호출.
function sendAjax2020(url) {
    var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

    oReq.open("POST", url); // url로부터 받는 데이터 형식이 POST라고 선언
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입을 json이라 알려줌.
    oReq.send(); // 그걸 보냄

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var val2021 = result.val2021;
        var val2020 = result.val2020;
        var val2019 = result.val2019;

        console.log(val2020[0]);

        var per2021 = result.per2021;
        var per2020 = result.per2020;
        var per2019 = result.per2019;

        var bill2021 = result.bill2021;
        var bill2020 = result.bill2020;
        var bill2019 = result.bill2019;

        listVal2020 = val2020;
        listPer2020 = per2020;
        listBill2020 = bill2020;

        var comp_data = data.datasets[0].data;
        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;
        // var name_data = data.labels;
        // var name_data2 = data2.labels;

        for (var i = 0; i < 12; i++) {
            comp_data[i] = val2020[i];
            // name_data[i] = gid[i];
            console.log("1 :" + val2020[i]);
        }
        for (var i = 0; i < 12; i++) {
            comp_data2[i] = per2020[i];
            // name_data2[i] = gid[i];
            console.log("2 :" + per2020[i]);
        }
        for (var i = 0; i < 4; i++) {
            comp_data3[i] = per2020[i];
            // name_data2[i] = gid[i];
            console.log("3 :" + per2020[i]);
        }

        data.datasets[0].data = comp_data;
        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;

        // data.labels = name_data;
        // data.labels = name_data2;
        mychart1.update();
        myChart2.update();
        myChart3.update();

        for (var i = 11; i < 14; i++) {
            console.log(val2021[i]);
            document.querySelector(`#k${i - 10}`).innerHTML =
                val2021[i] + "PPM";
        }
        for (var i = 11; i < 14; i++) {
            console.log(val2020[i]);
            document.querySelector(`#s${i - 10}`).innerHTML =
                val2020[i] + "PPM";
        }
        for (var i = 11; i < 14; i++) {
            console.log(val2019[i]);
            document.querySelector(`#y${i - 10}`).innerHTML =
                val2019[i] + "PPM";
        }

        for (var i = 11; i < 14; i++) {
            console.log(bill2021[i]);
            document.querySelector(`#k${i - 7}`).innerHTML =
                bill2021[i] + "만원";
        }
        for (var i = 11; i < 14; i++) {
            console.log(bill2020[i]);
            document.querySelector(`#s${i - 7}`).innerHTML =
                bill2020[i] + "만원";
        }
        for (var i = 11; i < 14; i++) {
            console.log(bill2019[i]);
            document.querySelector(`#y${i - 7}`).innerHTML =
                bill2019[i] + "만원";
        }

        for (var i = 1; i < 4; i++) {
            console.log(per2021[i]);
            document.querySelector(`#k${i + 6}`).innerHTML = per2021[i] + "%";
        }
        for (var i = 1; i < 4; i++) {
            console.log(per2020[i]);
            document.querySelector(`#s${i + 6}`).innerHTML = per2020[i] + "%";
        }
        for (var i = 1; i < 4; i++) {
            console.log(per2019[i]);
            document.querySelector(`#y${i + 6}`).innerHTML = per2019[i] + "%";
        }

        console.log(val2021[11]);
        document.querySelector(`#k${10}`).innerHTML = val2021[11] + "만원";
        console.log(val2020[11]);
        document.querySelector(`#s${10}`).innerHTML = val2020[11] + "만원";
        console.log(val2019[11]);
        document.querySelector(`#y${10}`).innerHTML = val2019[11] + "만원";
    });
}

// 해당 창이 켜질 때, sandAjax를 호출.
function sendAjax2019(url) {
    var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

    oReq.open("POST", url); // url로부터 받는 데이터 형식이 POST라고 선언
    oReq.setRequestHeader("Content-Type", "application/json"); // 컨텐츠 타입을 json이라 알려줌.
    oReq.send(); // 그걸 보냄

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var val2021 = result.val2021;
        var val2020 = result.val2020;
        var val2019 = result.val2019;

        console.log(val2019[0]);
        var gid = result.gid;

        var per2021 = result.per2021;
        var per2020 = result.per2020;
        var per2019 = result.per2019;

        var bill2021 = result.bill2021;
        var bill2020 = result.bill2020;
        var bill2019 = result.bill2019;

        listVal2019 = val2019;
        listPer2019 = per2019;
        listBill2019 = bill2019;

        var comp_data = data.datasets[0].data;
        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;

        // var name_data = data.labels;
        // var name_data2 = data2.labels;

        for (var i = 0; i < 12; i++) {
            comp_data[i] = val2019[i];
            // name_data[i] = gid[i];
            console.log("1 :" + val2019[i]);
        }
        for (var i = 0; i < 12; i++) {
            comp_data2[i] = per2019[i];
            // name_data2[i] = gid[i];
            console.log("2 :" + per2019[i]);
        }
        for (var i = 0; i < 4; i++) {
            comp_data3[i] = per2019[i];
            // name_data2[i] = gid[i];
            console.log("3 :" + per2019[i]);
        }
        data.datasets[0].data = comp_data;
        data2.datasets[0].data = comp_data2;
        data3.datasets[0].data = comp_data3;

        // data.labels = name_data;
        // data.labels = name_data2;
        mychart1.update();
        myChart2.update();
        myChart3.update();

        for (var i = 10; i < 13; i++) {
            console.log(val2021[i]);
            document.querySelector(`#k${i - 9}`).innerHTML = val2021[i] + "PPM";
        }
        for (var i = 10; i < 13; i++) {
            console.log(val2020[i]);
            document.querySelector(`#s${i - 9}`).innerHTML = val2020[i] + "PPM";
        }
        for (var i = 10; i < 13; i++) {
            console.log(val2019[i]);
            document.querySelector(`#y${i - 9}`).innerHTML = val2019[i] + "PPM";
        }

        for (var i = 10; i < 13; i++) {
            console.log(bill2021[i]);
            document.querySelector(`#k${i - 7}`).innerHTML =
                bill2021[i] + "만원";
        }
        for (var i = 10; i < 13; i++) {
            console.log(bill2020[i]);
            document.querySelector(`#s${i - 7}`).innerHTML =
                bill2020[i] + "만원";
        }
        for (var i = 10; i < 13; i++) {
            console.log(bill2019[i]);
            document.querySelector(`#y${i - 7}`).innerHTML =
                bill2019[i] + "만원";
        }

        for (var i = 2; i < 5; i++) {
            console.log(per2021[i]);
            document.querySelector(`#k${i + 5}`).innerHTML = per2021[i] + "%";
        }
        for (var i = 2; i < 5; i++) {
            console.log(per2020[i]);
            document.querySelector(`#s${i + 5}`).innerHTML = per2020[i] + "%";
        }
        for (var i = 2; i < 5; i++) {
            console.log(per2019[i]);
            document.querySelector(`#y${i + 5}`).innerHTML = per2019[i] + "%";
        }

        console.log(val2021[12]);
        document.querySelector(`#k${10}`).innerHTML = val2021[12] + "만원";
        console.log(val2020[12]);
        document.querySelector(`#s${10}`).innerHTML = val2020[12] + "만원";
        console.log(val2019[12]);
        document.querySelector(`#y${10}`).innerHTML = val2019[12] + "만원";
    });
}

function yearSelect(year) {
    switch (year) {
        case "2021":
            console.log("현재");
            sendAjax2021("https://eissistem.herokuapp.com/quality.html");
            break;
        case "2020":
            console.log("과거1년전");
            sendAjax2020("https://eissistem.herokuapp.com/quality.html");
            break;
        case "2019":
            console.log("과거2년전");
            sendAjax2019("https://eissistem.herokuapp.com/quality.html");
            break;
        default:
            console.log("놀고싶다");
    }
}

// -100 ~ 100 사이 랜덤값 생성
// window.randomScalingFactor = function () {return (Math.random()*200 - 100); };
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var data4 = {
    labels: [
        "2021-09-01",
        "2021-09-02",
        "2021-09-03",
        "2021-09-04",
        "2021-09-05",
        "2021-09-06",
    ],
    datasets: [
        {
            label: "A-01",
            data: [
                getRandomInt(-50, 20),
                getRandomInt(-10, 30),
                getRandomInt(-10, 80),
                getRandomInt(-10, 50),
                getRandomInt(-10, 70),
                getRandomInt(-10, 90),
            ],
            borderColor: "rgb(0, 194, 237)",
            backgroundColor: "rgb(0, 194, 237)",
            fill: true,
        },
        {
            label: "A-02",
            data: [
                getRandomInt(-10, 50),
                getRandomInt(-10, 70),
                getRandomInt(-10, 90),
                getRandomInt(-10, 30),
                getRandomInt(-10, 40),
                getRandomInt(-10, 30),
            ],
            borderColor: "rgb(0, 94, 209)",
            backgroundColor: "rgb(0, 94, 209)",
            fill: true,
        },
        {
            label: "A-03",
            data: [
                getRandomInt(-10, 30),
                getRandomInt(-10, 40),
                getRandomInt(-10, 30),
                getRandomInt(-10, 50),
                getRandomInt(-10, 70),
                getRandomInt(-10, 90),
            ],
            borderColor: "rgba(82, 36, 209)",
            backgroundColor: "rgba(82, 36, 209)",
            fill: true,
        },
    ],
};

// 결과 차트
var ctx = document.getElementById("chartsy4").getContext("2d");
var myChart4 = new Chart(ctx, {
    type: "line",
    data: data4,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
            tooltip: {
                mode: "index",
            },
        },
        interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return value + "%";
                    },
                },
            },
        },
    },
});

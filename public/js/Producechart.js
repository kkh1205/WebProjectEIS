

var data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: '월별 생산액(억 원)',
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [0, 0, 0, 0, 0, 0,0],
        fill: false
    }]
};


var data2 = {
    labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
    datasets: [{
        label: '가동률(%)',
        data: [0,0,0,0,0,0],
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        borderWidth: 1
    }]
};

var data3 = {
    labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
    datasets: [{
        label: '가동률(%)',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        borderWidth: 1
    }]
};

var data4 = {
    labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
    datasets: [{
        label: '비율',
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        borderWidth: 1
    }]
};


   

//직선그래프//


var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

    type: 'line',


    data: data1,


    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black"
                }
            }

        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    font: { size: 10 }
                }
            },
            Y: {
 
                grid: {
                    drawBorder: false,
                    color: "gray"
                    },
                  

                

                ticks: {
                    color: "black",
                    fontSize: 14,
                }
            }


        }


    }
});





















//막대차트

// 컨텍스트
var ctx = document.getElementById("myChart2").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_2 = new Chart(ctx, {
    type: 'bar',
    data: data2,
    options: {
        onClick: function clickHandler(evt) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
            const points = myChart_2.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];   
                var label = myChart_2.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value = myChart_2.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal.show()                                                              //sm. 모달 실행
                
            }}
        ,

            

        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black"
                }
            }

        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    font: { size: 10 }
                }
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray"
                    },
                ticks: {
                    color: "white",
                    font: { size: 10 },
                }
            }


        }


    }
});


// 우선 컨텍스트를 가져옵니다. 
var ctx = document.getElementById("myChart3").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_3 = new Chart(ctx, {
    type: 'bar',
    data: data3,
    options: {
        onClick: function clickHandler(evt) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
            const points = myChart_3.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];   
                var label = myChart_3.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value = myChart_3.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal.show()                                                              //sm. 모달 실행
                
            }}
        ,

        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black"
                }
            }

        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    fontSize: 10
                }
            },
            Y: {

                grid: {
                    drawBorder: false,
                    color: "gray"
                    },

                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart4").getContext('2d');

var myChart_4 = new Chart(ctx, {
    type: 'radar',
    data: data4,
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black",
                    display: false
                }
            }

        },
        scales: {

            Y: {
                ticks: {
                    color: "black",
                    fontSize: 14,
                }
            }


        }


    }
});


window.onload = function() {
    sendAjax('http://localhost:3000/produce.html');
};

function sendAjax(url) {
    var oReq = new XMLHttpRequest();

    oReq.open('POST', url);
    oReq.setRequestHeader('Content-Type', "application/json") // json 형태로 보낸다
    oReq.send();

    oReq.addEventListener('load', function() {
        var result = JSON.parse(oReq.responseText);
        console.log(result);

        var score = result.score;
        var uid = result.uid;
        var comp_data2 = data2.datasets[0].data;
        var comp_data3 = data3.datasets[0].data;
        var comp_data1 = data1.datasets[0].data;
        var comp_data4 = data4.datasets[0].data;
        var name_data2 = data2.labels;
        var name_data3 = data3.labels;
        var name_data1 = data1.labels;
        var name_data4 = data4.labels;

        for (var i = 0; i < 6; i++) {
            comp_data2[i] = score[i];
            name_data2[i] = uid[i];
            console.log("2 :" + score[i]);
        }
        for (var i = 6; i < 12; i++) {
            comp_data3[i-6] = score[i];
            name_data3[i-6] = uid[i];

            console.log("3 :" + score[i]);
        }
        for (var i = 12; i < 24; i++) {
            comp_data1[i-12] = score[i];
            name_data1[i-12] = uid[i];

            console.log("1 :" + score[i]);
        }
        for (var i = 24; i < 30; i++) {
            comp_data4[i-24] = score[i];
            name_data4[i-24] = uid[i];

            console.log("4 :" + score[i]);
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
    })
}
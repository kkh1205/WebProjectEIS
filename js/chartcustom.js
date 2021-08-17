

//직선그래프//
var chart1arr = [0, 10, 5, 2, 20, 30];
var chart2arr = [12, 19, 3, 5, 2, 3];
var chart3arr = [5, 16, 18, 10, 15, 6];
var chart4arr = [12, 19, 3, 5, 2, 3];

var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

  type: 'line',


  data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
          label: '월별 매출액(억 원)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: chart1arr,
          fill: false
      }]
  },


  options: {
      legend: {
          labels: {
              fontColor: "white",
              fontSize: 13
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
    data: {
        labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart2arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});// 우선 컨텍스트를 가져옵니다. 
var ctx = document.getElementById("myChart3").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart3arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart4").getContext('2d');

var myChart_4 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '비율',
            data: chart4arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//직선그래프//


var ctx = document.getElementById('myChart5');
var myChart_5 = new Chart(ctx, {

  type: 'line',


  data: {
     labels: ['July', '	August', 'September', '	October', 'November', 'December'],
      datasets: [{
          label: '월별 매출액(억 원)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: chart1arr,
          fill: false
      }]
  },


  options: {
      legend: {
          labels: {
              fontColor: "white",
              fontSize: 13
          }
      }

  }
});








//막대차트

// 컨텍스트
var ctx = document.getElementById("myChart6").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_6 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart2arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});// 우선 컨텍스트를 가져옵니다. 
var ctx = document.getElementById("myChart7").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_7 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart3arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart8").getContext('2d');

var myChart_8 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '비율',
            data: chart4arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//직선그래프//


var ctx = document.getElementById('myChart9');
var myChart_9 = new Chart(ctx, {

  type: 'line',


  data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: '월별 매출액(억 원)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20 ],
          fill: false
      }]
  },


  options: {
      legend: {
          labels: {
              fontColor: "white",
              fontSize: 13
          }
      }

  }
});








//막대차트

// 컨텍스트
var ctx = document.getElementById("myChart10").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_10 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart2arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});// 우선 컨텍스트를 가져옵니다. 
var ctx = document.getElementById("myChart11").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_11 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
        datasets: [{
            label: '매출액(억 원)',
            data: chart3arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart12").getContext('2d');

var myChart_12 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '비율',
            data: chart4arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



function testt(){
    var dataset1 = myChart_1.data.datasets;
    var dataset2 = myChart_2.data.datasets;
    var dataset3 = myChart_3.data.datasets;
    var dataset4 = myChart_4.data.datasets;
    var dataset5 = myChart_5.data.datasets;
    var dataset6 = myChart_6.data.datasets;
    var dataset7 = myChart_7.data.datasets;
    var dataset8 = myChart_8.data.datasets;
    var dataset9 = myChart_9.data.datasets;
    var dataset10 = myChart_10.data.datasets;
    var dataset11= myChart_11.data.datasets;
    var dataset12 = myChart_12.data.datasets;










    for(var i=0; i<dataset1.length; i++){
        console.log(dataset1);
        //데이터 갯수 만큼 반복
        var data = dataset1[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset2.length; i++){
        console.log(dataset2);
        //데이터 갯수 만큼 반복
        var data = dataset2[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset3.length; i++){
        console.log(dataset3);
        //데이터 갯수 만큼 반복
        var data = dataset3[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset4.length; i++){
        console.log(dataset4);
        //데이터 갯수 만큼 반복
        var data = dataset4[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset5.length; i++){
        console.log(dataset5);
        //데이터 갯수 만큼 반복
        var data = dataset5[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset6.length; i++){
        console.log(dataset6);
        //데이터 갯수 만큼 반복
        var data = dataset6[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset7.length; i++){
        console.log(dataset7);
        //데이터 갯수 만큼 반복
        var data = dataset7[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset8.length; i++){
        console.log(dataset8);
        //데이터 갯수 만큼 반복
        var data = dataset8[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset9.length; i++){
        console.log(dataset9);
        //데이터 갯수 만큼 반복
        var data = dataset9[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset10.length; i++){
        console.log(dataset10);
        //데이터 갯수 만큼 반복
        var data = dataset10[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset11.length; i++){
        console.log(dataset11);
        //데이터 갯수 만큼 반복
        var data = dataset11[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    for(var i=0; i<dataset12.length; i++){
        console.log(dataset12);
        //데이터 갯수 만큼 반복
        var data = dataset12[i].data;
        for(var j=0 ; j < data.length ; j++){
            data[j] = Math.floor(Math.random() * 50);
        }
    }
    
    
    myChart_1.update();	//차트 업데이트
    myChart_2.update();	//차트 업데이트
    myChart_3.update();	//차트 업데이트
    myChart_4.update();	//차트 업데이트
    myChart_5.update();	//차트 업데이트
    myChart_6.update();	//차트 업데이트
    myChart_7.update();	//차트 업데이트
    myChart_8.update();	//차트 업데이트
    myChart_9.update();	//차트 업데이트
    myChart_10.update();	//차트 업데이트
    myChart_11.update();	//차트 업데이트
    myChart_12.update();	//차트 업데이트

}
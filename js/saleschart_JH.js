

//직선그래프//
var chart1arr = [1, 10, 5, 2, 20, 3,1, 10, 5, 2, 20, 30];
var chart2arr = [12, 19, 3, 5, 2, 3];
var chart3arr = [5, 16, 18, 10, 15, 6];
var chart4arr = [12, 19, 3, 5, 2];

var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

  type: 'bar',


  data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'],
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
      },
      scales: {
        xAxes: {
            ticks:{
                fontColor : "rgba(255, 255, 255, 1)",
                fontSize : 11
            }            
        },
        yAxes: {
            ticks: {
                fontColor : "white",
                fontSize : 14,
            }
        }


       }
      

  }
});

var ctx = document.getElementById('myChart2');
var myChart_2 = new Chart(ctx, {

  type: 'bar',


  data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
          label: '제품별 매출액(억 원)',
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
      },
      scales: {
        xAxes: {
            ticks:{
                fontColor : "rgba(255, 255, 255, 1)",
                fontSize : 11
            }            
        },
        yAxes: {
            ticks: {
                fontColor : "white",
                fontSize : 14,
            }
        }


       }
      

  }
});








//막대차트

// 컨텍스트
var ctx = document.getElementById("myChart3").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_3 = new Chart(ctx, {
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
var ctx = document.getElementById("myChart4").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_4 = new Chart(ctx, {
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
var ctx = document.getElementById("myChart5").getContext('2d');

var myChart_5 = new Chart(ctx, {
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




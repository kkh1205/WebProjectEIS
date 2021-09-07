
var data = {
  labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  datasets: [{
  label: '비용',
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
}]
}

var data2 = {
labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
datasets: [{

data: [52, 53, 62, 78, 98, 100,52, 53, 62, 78, 98, 100],
datalabels:{
  align: 'end',
  anchor: 'start'
}
,

backgroundColor: [
'rgba(36, 192, 209)',
'rgba(36, 192, 209)',
'rgba(36, 192, 209)',


'rgba(36, 151, 209)',
'rgba(36, 151, 209)',
'rgba(36, 151, 209)',


'rgba(82, 36, 209)',
'rgba(82, 36, 209)',
'rgba(82, 36, 209)',


 'rgba(172, 36, 209)',
 'rgba(172, 36, 209)',
 'rgba(172, 36, 209)',


],
}]
}

var data3 = {
  labels: ['QI01', 'QI02', 'QI03', 'QI04'],
  datasets: [{
      data: [12, 19, 3, 5],
      backgroundColor: [
          'rgba(36, 192, 209)',
          'rgba(36, 151, 209)',
          'rgba(82, 36, 209)',
          
         
          'rgba(172, 36, 209)'
      ],
      borderColor: [
        'rgba(36, 192, 209)',
          'rgba(36, 151, 209)',
          'rgba(82, 36, 209)',
          'rgba(114, 36, 209)',
          'rgba(154, 36, 209)',
          'rgba(172, 36, 209)'
      ],
      borderWidth: 1,
  }]
}


var options = {
responsive: true,
plugins: {

},
interaction: {
intersect: false,
},
scales: {
x: {
display: true,
title: {
display: true
}
},
y: {
beginAtZero: true,
display: true,
title: {
display: true,
},
ticks: {
  // Include a dollar sign in the ticks
  callback: function(value, index, values) {
      return value + '만원'; 
  }
}
}
},
}


//생산계획 차트
var ctx = document.getElementById('chartsy1').getContext('2d');
var chartsy_1 = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

// 품질이력 차트
var ctx = document.getElementById('chartsy2').getContext('2d');
var myChart2 = new Chart(ctx, {
  plugins: [ChartDataLabels],
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%'; 
                    }
            },
            plugins: {
              datalabels: {
                formatter: function(value, context) {
                  return context.chart.data.labels[context.dataIndex];
                }
              }
            }, 
          }
    }, 
            plugins: {
                 legend: {
                  display: false
              },
            }
        
    }
});

// 품질검사 차트
var ctx = document.getElementById('chartsy3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'doughnut',
    data: data3,
    options: {onClick: function clickHandler(evt) {
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
              document.querySelector('#rr').innerHTML = "statRun2021[seqcence+6]";
              document.querySelector('#bb').innerHTML = "statBesh2021[seqcence+6]";
              document.querySelector('#nono').innerHTML = "statNonstop2021[seqcence+6]";
              var valueyear = document.getElementById('allTypeList').value;
              console.log(valueyear);
              switch (valueyear) {
                  case "2021":
                      document.querySelector('#rr').innerHTML = "1"
                      document.querySelector('#bb').innerHTML = "2"
                      document.querySelector('#nono').innerHTML = "3"
                      break;
                  case "2020":
                      document.querySelector('#rr').innerHTML = "statRun2020[seqcence+6];"
                      document.querySelector('#bb').innerHTML = "statBesh2020[seqcence+6];"
                      document.querySelector('#nono').innerHTML = "statNonstop2020[seqcence+6];"
                      break;
                  case "2019":
                      document.querySelector('#rr').innerHTML = "statRun2019[seqcence+6];"
                      document.querySelector('#bb').innerHTML = "statBesh2019[seqcence+6];"
                      document.querySelector('#nono').innerHTML = "statNonstop2019[seqcence+6];"
                      break;

              }
          console.log(label); //sm. 콘솔로 값이 제대로 가져와지는지 확인
          console.log(value);
          var myModal = new bootstrap.Modal(
              document.getElementById("exampleModal")
          ); //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
          document.querySelector("#ModalLabel").innerHTML = label + " 가동률 지표";
              
          myModal.show(); //sm. 모달 실행
      }
  },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          
        }, 
        
    },
});



// 해당 창이 켜질 때, sandAjax를 호출.
window.onload = function(){
    sandAjax('http://localhost:3000/quality.html');
  }
  
  function sandAjax(url) {
    var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.
  
    oReq.open('POST',url); // url로부터 받는 데이터 형식이 POST라고 선언
    oReq.setRequestHeader('Content-Type','application/json'); // 컨텐츠 타입을 json이라 알려줌.
    oReq.send(); // 그걸 보냄
  
    oReq.addEventListener('load', function() {
      var result = JSON.parse(oReq.responseText);
      console.log(result);
  
      var cost2021 = result.cost2021;
      console.log(cost2021[0]);
    //   var A02 = result.A02;
    //   var A03 = result.A03;
  
      var comp_data = data.datasets[0].data;
    //   var comp_data2 = data1.datasets[1].data;
    //   var comp_data3 = data1.datasets[2].data;
  
      for (var i = 0; i < comp_data.length; i++) {
        comp_data[i] = cost2021[i];
      }
  
    //   for (var i = 0; i < comp_data.length; i++) {
    //     comp_data1[i] = A02[i];
    //   }
  
    //   for (var i = 0; i < comp_data.length; i++) {
    //     comp_data2[i] = A03[i];
    //   }
  
      data.datasets[0].data = comp_data;
    //   data1.datasets[1].data = comp_data2;
    //   data1.datasets[2].data = comp_data3;

      chartsy_1.update();
    })
  }



var ctx = document.getElementById('chartsy4').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: 'Dataset',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        fill: false
      }
    ]
  },
  options: {
    plugins: {
      filler: {
        propagate: false,
      },
      title: {
        display: true,
      }
    },
    interaction: {
      intersect: false,
    }
  }
});


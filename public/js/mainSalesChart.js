var dataSales1 = {
  labels: ['기술영업', '소프트웨어', '해외영업'],
  datasets: [{
    data: [80, 100, 200],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
}

var optionsSales1 = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '부서별 1분기 매출'
    }
  }
}

var ctx = document.getElementById('SalesChart')

var SalesChart = new Chart(ctx, {
  type: 'doughnut',
  data: dataSales1,
  options: optionsSales1
});


// // 해당 창이 켜질 때, sandAjax를 호출.
// window.onload = function(){
//   sandAjax('http://localhost:3001');
// }

// function sandAjax(url) {
//   var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

//   oReq.open('POST',url); // url로부터 받는 데이터 형식이 POST라고 선언
//   oReq.setRequestHeader('Content-Type','application/json'); // 컨텐츠 타입을 json이라 알려줌.
//   oReq.send(); // 그걸 보냄

//   oReq.addEventListener('load', function() {
//     var result = JSON.parse(oReq.responseText);
//     console.log(result);

//     var quarter1 = result.quarter1;

//     var comp_data = dataSales1.datasets[0].data;
    
//     for (var i = 0; i < comp_data.length; i++) {
//       comp_data[i] = quarter1[i];
//     }

//     dataSales1.datasets[0].data = comp_data;

//     SalesChart.update();
//   })
// }
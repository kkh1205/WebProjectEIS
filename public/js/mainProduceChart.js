var data = {
  labels: ['1분기', '2분기', '3분기', '4분기'],
  datasets: [{
      label: 'A-01',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-02',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'A-03',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
}

var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

var ctx = document.getElementById('ProduceChart');
var ProduceChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

// 위에까진 차트 적용. 데이터를 객체에 저장시켜야 변수로 지정하든 뭘 하든 할수 있으니 객채로 저장.

// 해당 창이 켜질 때, sandAjax를 호출.
window.onload = function(){
  sandAjax('http://localhost:3001');
}

function sandAjax(url) {
  var oReq = new XMLHttpRequest(); // XMLHttpRequest객체는 서버와 상호작용 하기위해 사용된다. 새로고침없이도 URL로부터 데이터를 받을 수 있다. 그래서 매개변수를 URL로 받음.

  oReq.open('POST',url); // url로부터 받는 데이터 형식이 POST라고 선언
  oReq.setRequestHeader('Content-Type','application/json'); // 컨텐츠 타입을 json이라 알려줌.
  oReq.send(); // 그걸 보냄

  oReq.addEventListener('load', function() {
    var result = JSON.parse(oReq.responseText);
    console.log(result);

    var A01 = result.A01;
    var A02 = result.A02;
    var A03 = result.A03;

    var comp_data = data.datasets[0].data;
    var comp_data1 = data.datasets[1].data;
    var comp_data2 = data.datasets[2].data;

    for (var i = 0; i < comp_data.length; i++) {
      comp_data[i] = A01[i];
    }

    for (var i = 0; i < comp_data.length; i++) {
      comp_data1[i] = A02[i];
    }

    for (var i = 0; i < comp_data.length; i++) {
      comp_data2[i] = A03[i];
    }

    data.datasets[0].data = comp_data;
    data.datasets[1].data = comp_data1;
    data.datasets[2].data = comp_data2;

    ProduceChart.update();
  })
}

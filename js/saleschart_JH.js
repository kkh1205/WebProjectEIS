

//직선그래프//
var chart1arr = [1, 10, 5, 2, 20, 3,1, 10, 5, 2, 20, 30];
var chart2arr = [12, 19, 14, 23, 33, 3, 2, 3, 5, 2, 3];
var chart3arr = [5, 16, 18, 10, 15, 6];
var chart4arr = [12, 19, 14, 23, 33];

var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '월별 매출액',
            data: chart1arr,
            backgroundColor: [
                'rgba(248,37,37, 0.2)', //1월
                
            ],
            borderColor: [
                'rgba(248,37,37,1)',  // 1월
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(255, 255, 255, 1)"
                }
            }

        },
        scales: {
            xAxes: {
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 10
                }
            },
            yAxes: {
                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});

var ctx = document.getElementById('myChart2');
var myChart_2 = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ["감속기","NICO 감속기","전자레버", "탄성커플링", "PTO", "사이트 트러스터", "조수기", "유압기기", "조타기", "기타"],
        datasets: [{
            label: '제품별 매출액',
            data: chart2arr,
            backgroundColor: [
                'rgba(240,157,157, 0.5)', //감속기
                'rgba(101,75,190, 0.5)',  //NICO 감속기
                'rgba(174,217,113, 0.5)',  //전자레버
                'rgba(226,135,173, 0.5)',  //탄성커플링
                'rgba(111,211,109, 0.5)', //PTO
                'rgba(181,88,191, 0.5)', //사이트 트러스터
                'rgba(123,200,207, 0.5)', //조수기
                'rgba(232,235,86, 0.5)', //유압기기
                'rgba(239,193,87, 0.5)',  //조타기
                'rgba(195,143,65, 0.5)',  // 기타
                
            ],
            borderColor: [
                'rgba(240,157,157, 1)', //감속기
                'rgba(101,75,190, 1)',  //NICO 감속기
                'rgba(174,217,113, 1)',  //전자레버
                'rgba(226,135,173, 1)',  //탄성커플링
                'rgba(111,211,109, 1)', //PTO
                'rgba(181,88,191, 1)', //사이트 트러스터
                'rgba(123,200,207, 1)', //조수기
                'rgba(232,235,86, 1)', //유압기기
                'rgba(239,193,87, 1)',  //조타기
                'rgba(195,143,65, 1)',  // 기타
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(255, 255, 255, 1)"
                    
                }
            }

        },
        scales: {
            xAxes: {
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 10
                }
            },
            yAxes: {
                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});








//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart5").getContext('2d');

var myChart_5 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["감속기","NICO 감속기","전자레버", "탄성커플링", "PTO"],
        datasets: [{
            label: '비율',
            data: chart4arr,
            backgroundColor: [
                'rgba(240,157,157, 0.5)', //감속기
                'rgba(101,75,190, 0.5)',  //NICO 감속기
                'rgba(174,217,113, 0.5)',  //전자레버
                'rgba(226,135,173, 0.5)',  //탄성커플링
                'rgba(111,211,109, 0.5)' //PTO
                
            ],
            borderColor: [
                'rgba(240,157,157, 1)', //감속기
                'rgba(101,75,190, 1)',  //NICO 감속기
                'rgba(174,217,113, 1)',  //전자레버
                'rgba(226,135,173, 1)',  //탄성커플링
                'rgba(111,211,109, 1)' //PTO
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(255, 255, 255, 1)"
                }
            }

        },
        scales: {

            yAxes: {
                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});





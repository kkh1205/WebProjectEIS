var chart20 = [55,40,50,40,20,36];
var chart20_1 = [5,4,5,4,10,6];

var chart5arr = [15, 40, 50, 40, 20, 30, 26, 32, 66];
var chart5_1arr = [10,7,3,5,8,2,4,9,11]
var chart5_2arr = [18,2,4,9,11,31,15,5,16]


//A-12 정지사유 차트

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
        labels: ["태성조선", "한화조선", "삼현정밀", "진영기업", "동진조선", "세진기업"],
        datasets: [
            {
                label: '채권회수율(억)',
                data: chart20,
                backgroundColor: [
                    
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,255,255,1)'
                    
                ],
                borderWidth: 1
            },
            {
                label: '미수금(억)',
                data: chart20_1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 1
            }
        ]
    },
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
                    fontSize: 10
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




// 2번째 모달창

var ctx = document.getElementById("myChart11").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_11 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["감속기", "NICO감속기", "전자레버", "탄성커플링", "PTO", "사이드 트러스터", "조수기", "유압기", "조타기"],
        datasets: [
            {
                label: '태성조선(억)',
                data: chart5arr,
                backgroundColor: [
                    
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,255,255,1)'
                    
                ],
                borderWidth: 1
            },
            {
                label: '한화조선(억)',
                data: chart5_1arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 1
            },
            {
                label: '동진조선(억)',
                data: chart5_2arr,
                backgroundColor: [
                    'rgba(125, 99, 132, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 1
            }
        ]
    },
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
                    fontSize: 10
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



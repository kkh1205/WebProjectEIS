var ctx = document.getElementById('SalesChart4')

var SalesChart4 = new Chart(ctx,  {
    type: 'doughnut',
    data: {
        labels: ['기술영업', '소프트웨어', '해외영업'],
        datasets: [{
            label: '1분기',
            data: [80, 60, 180],
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
    },
    options: {
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
                text: '부서별 4분기 매출'
            }
        }
    }
});
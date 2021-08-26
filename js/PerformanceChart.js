var ctx = document.getElementById('PerformanceChart')

var dataset1 = {}

var PerformanceChart = new Chart(ctx,  {
    type: 'bar',
    data: {
        labels: ['1분기', '2분기', '3분기', '4분기'],
        datasets: [{
            label: '영업이익',
            data: [450, 500, 350, 700],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1,
            order:1
        },
        {
          label: '매출액',
            data: [600, 750, 500, 1000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 3,
            type: 'line',
            order: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
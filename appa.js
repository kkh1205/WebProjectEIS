var express = require('express');
var app = express();
var boardRouter = require('./public/serverb.js');



//http://localhost:3000로 접속하면 boardRouter 데이터 나옴
app.use('/', boardRouter){
    
};

app.listen(3000, () => console.log('Server listen on port 3000...'));

var ctx = document.getElementById('myCharta').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

var  data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
        label: '# of Votes',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var socket= io("localhost:3000");
var chart1 = document.getElementById("analysis-chart1").getContext('2d');
socket.on("server-send-bang1",function(data) {
    var chart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ["January", "Februry", "March", "April", "May", "June","July","August","September","October","November","December"],
        datasets: [
        {
            label: 'Max value',
            data: [12, 19, 19, 38, 19, 33, 20, 13, 14, 11, 39, 33],
            backgroundColor: [
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)'
            ],
            borderColor: [
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)'
            ],
            borderWidth: 1
        },
        {
            label: 'Min value',
            data: [3, 16, 18, 32, 12, 20, 31, 20, 13, 20, 22, 10],
            backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
});

//-------------------------> do thi bang 2 <-----------------------
var chart2 = document.getElementById("analysis-chart2").getContext('2d')
socket.on("server-send-bang2",function(data) {
    var chart = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ["January", "Februry", "March", "April", "May", "June","July","August","September","October","November","December"],
        datasets: [
        {
            label: 'Max value',
            data: [12, 19, 19, 38, 19, 33, 20, 13, 14, 11, 39, 33],
            backgroundColor: [
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)',
            'rgba(0, 231, 109, 1)'
            ],
            borderColor: [
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)',
            'rgba(0, 231, 109,0.2)'
            ],
            borderWidth: 1
        },
        {
            label: 'Min value',
            data: [3, 16, 18, 32, 12, 20, 31, 20, 13, 20, 22, 10],
            backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
});

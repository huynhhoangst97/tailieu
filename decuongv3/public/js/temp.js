var socket = io("localhost:3000");
var chartTemp = document.getElementById('chartTemp');
$(document).ready(function () {
    socket.on('datasendCli', (data) => {
        for(var i=0;i< data.length;i++){
            add1(i, data[i].nhietdo, data[i].thoigian);
        }
    });
});

function add1(index,data, labels) {
    chartTemp.data.datasets.data[index] = data;
    chartTemp.data.labels[index] = labels;
    chartTemp.update();
}

var chartTemp = Chart.Line(chartTemp, {
    data: data3,
    option: option
});

var data3 = {
    labels: [],
    datasets: [
        {
            label: 'Temperature',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            pointHoverBackgroundColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            lineTension: 0.1,
        }
    ]
}

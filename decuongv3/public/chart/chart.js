var chart1 = document.getElementById('myChart1');
var chart2 = document.getElementById("myChart2").getContext('2d');

var data = {
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
            pointHoverBackgroundColor:'rgba(255,99,132,1)',
            borderWidth: 1,
            lineTension: 0.1,
        },
        {
            lineTension: 0.1,
            label: 'Huminity',
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(54, 162, 235, 1)'
        },
        {
            lineTension: 0.1,
            label: 'Light Intensity',
            data: [],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(255, 159, 64, 1)'
        },
        {
            lineTension: 0.1,
            label: 'CO2 Injection',
            data: [],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(153, 102, 255, 1)'
        }
    ]
};

var data1 = {
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
            pointHoverBackgroundColor:'rgba(255,99,132,1)',
            borderWidth: 1,
            lineTension: 0.1,
        },
        {
            lineTension: 0.1,
            label: 'Huminity',
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(54, 162, 235, 1)'
        },
        {
            lineTension: 0.1,
            label: 'Light Intensity',
            data: [],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(255, 159, 64, 1)'
        },
        {
            lineTension: 0.1,
            label: 'CO2 Injection',
            data: [],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor:'rgba(153, 102, 255, 1)'
        }
    ]
};

var socket = io("localhost:3000");
socket.on('datasendCli',(data)=>{
    var i=0;
    while(typeof data[i] !="undefined"){
        adddata(i,0,data[i].nhietdo,data[i].thoigian,i);
        adddata(i,1,data[i].doam,data[i].thoigian,i);
        adddata(i,2,data[i].anhsang,data[i].thoigian,i);
        adddata(i,3,data[i].co2,data[i].thoigian,i);
        i++;
    }
});

socket.on('datasendIrr',(data)=>{
    
    var i=0;
    while(typeof data[i] !="undefined"){
        adddata1(i,0,data[i].ph,data[i].thoigian,i);
        adddata1(i,1,data[i].ec,data[i].thoigian,i);
        adddata1(i,2,data[i].waterTemp,data[i].thoigian,i);
        adddata1(i,3,data[i].oxygen,data[i].thoigian,i);
        i++;
    }
});

function adddata(index,local,data,labels) {
    myLineChart.data.datasets[local].data[index] = data;
    myLineChart.data.labels[index] = labels;
    myLineChart.update();
}

function adddata1(index,local,data,labels) {
    myLineChart1.data.datasets[local].data[index] = data;
    myLineChart1.data.labels[index] = labels;
    myLineChart1.update();
}

var option = {
	showLines: true
};

var myLineChart = Chart.Line(chart1, {
    data: data,
    options:option
});
var myLineChart1 = Chart.Line(chart2, {
    data: data1,
    options:option
});
var socket = io("localhost:3000");

socket.on('server-send-bang1',(data)=>{
    console.log(data);
    var g = new JustGage({
        id: "temp-chart",
        value: data.nhietdo,
        min: 0,
        max: 50,
        title: "Environment Temperature"
      });
});


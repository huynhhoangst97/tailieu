const express= require("express");
const mongoose= require("mongoose");
const bodyParser = require('body-parser');
const mysql =require("mysql");

const app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//connect tion mongodb
mongoose.connect('mongodb://localhost/thuthap',{ useNewUrlParser: true });

//
app.use(express.static("public"));

// view setup
app.set("views","./view");
app.set("view engine","ejs");

// init database
const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"quanlynongnghiep"
});


var schemaDb1 = new mongoose.Schema({
	nhietdo:String,
	doam:String,
	anhsang:String,
	co2:String
});

var schemaDb2 = new mongoose.Schema({
	ph:String,
	ec:String,
	waterTemp:String,
	Oxygen:String
});


var Climate = mongoose.model("table1",schemaDb1);
var Irrigation = mongoose.model("table2",schemaDb2);

app.get("/",(req,res)=>{
	res.render("index");
});

app.post('/updatebang1', urlencodedParser, function (req, res) {
	Climate.update({},req.body).exec((err,result)=>{
		if(err) throw err;
		console.log("update successful");
	});

	//inser mysql
	let sql ="SHOW TABLES LIKE 'Cli_"+now+"'";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        var resultStr = JSON.stringify(result);
        if(resultStr.length==2){
            let sql="CREATE TABLE Cli_"+now+"(id int AUTO_INCREMENT,thoigian VARCHAR(255),nhietdo VARCHAR(255), doam VARCHAR(255), anhsang VARCHAR(255), co2 VARCHAR(255), PRIMARY KEY(id))"
            db.query(sql,(err,result)=>{
				if(err) throw err;
				console.log("create table is successful");
				Climate.find().then(function(doc){
					let sql = "INSERT INTO Cli_"+now+" VALUES (null,curtime(),?,?,?,?)";
					db.query(sql,[doc[0].nhietdo,doc[0].doam,doc[0].anhsang,doc[0].co2],(err,result)=>{
						if(err) throw err;
						console.log("insert is successful");
					});
				})
            });
        } else{
            Climate.find().then(function(doc){
				let sql = "INSERT INTO Cli_"+now+" VALUES (null,curtime(),?,?,?,?)";
				db.query(sql,[doc[0].nhietdo,doc[0].doam,doc[0].anhsang,doc[0].co2],(err,result)=>{
					if(err) throw err;
					console.log("insert is successful");
				});
				
			});
        }
    })
})

app.post('/updatebang2', urlencodedParser, function (req, res) {
	Irrigation.update({},req.body).exec((err,result)=>{
		if(err) throw err;
		console.log("update successful");
	});
	
	//insert table
	let sql ="SHOW TABLES LIKE 'Irr_"+now+"'";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        var resultStr = JSON.stringify(result);
        if(resultStr.length==2){
            let sql="CREATE TABLE Irr_"+now+"(id int AUTO_INCREMENT,thoigian VARCHAR(255),ph VARCHAR(255), ec VARCHAR(255), waterTemp VARCHAR(255), oxygen VARCHAR(255), PRIMARY KEY(id))"
            db.query(sql,(err,result)=>{
				if(err) throw err;
				console.log("create table is successful");
				Irrigation.find().then(function(doc){
					let sql = "INSERT INTO Irr_"+now+" VALUES (null,curtime(),?,?,?,?)";
					db.query(sql,[doc[0].ph,doc[0].ec,doc[0].waterTemp,doc[0].Oxygen],(err,result)=>{
						if(err) throw err;
						console.log("insert is successful");
					});
				})
            });
        } else{
            Irrigation.find().then(function(doc){
				let sql = "INSERT INTO Irr_"+now+" VALUES (null,curtime(),?,?,?,?)";
				db.query(sql,[doc[0].ph,doc[0].ec,doc[0].waterTemp,doc[0].Oxygen],(err,result)=>{
					if(err) throw err;
					console.log("insert is successful");
				});
			});
		};
	});
})

//Get date
var today = new Date();
var now= today.toDateString();
now = now.replace(/\s/g, '_');

app.listen(4000,()=>{
	console.log("server started on port 4000");
});
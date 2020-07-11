var express = require('express');
var path = require('path');
var compilerm=require('./compiler.js');
var bodyparser=require('body-parser');
var port;

//var index=require('./routes/index')
var app=express();
app.set(port,process.env.PORT||3000);
app.use(express.static(__dirname+"/local/views"));
app.get('/', function(req,res){
  res.sendFile(__dirname+'/local/views/index.html');
});

app.listen(app.get(port),function(req,res){
  console.log("Listening on port 3000");
});
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.post('/compile',function(req,res){
	var datas=req.body.name;
	console.log(datas);
	
	compilerm.fun(datas,"compile",res);
});

app.post('/run',function(req,res){
	
	var datas=req.body.name;
	console.log(datas);
	compilerm.fun(datas,"run",res);
	
});

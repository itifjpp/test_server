var express=require('express');
var app=express();
var http = require('http').createServer(app);
var socket      =     require("socket.io");
var io=socket.listen(http);
io.sockets.on('connect',function(client){
    
});

app.get("/", function(req,res){
    res.json(200,{
        action:'Server node js & express is ready'
    });
   res.end(); 
});
http.listen(5000,function () {
    console.log('Servidor http listo en el puerto 5000 :)...');
});


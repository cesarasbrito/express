let express = require('express');
let app = express();
require('dotenv').config();


app.use("/public", express.static(__dirname + "/public"));

const myLogger = function (req, res, next) {
    var stringMsg = req.method + " " + req.path + " - " + req.ip;
    console.log(stringMsg)
    next()
  }
app.use(myLogger)



app.get("/now", function(req, res, next){
    console.log('now endpont')
    req.time = {"time": new Date().toString()};
    next();
}, function(req, res) {
    res.send(req.time);
  });


app.get("/json",function(req, res){
 
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "HELLO JSON"});     
    }
    else{
        res.json({"message": "Hello json"});
    }
});

app.get("/", function(req, res){
    //res.send('Hello Express');
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);

    //res.sendFile(absolutePath);
});



































 module.exports = app;

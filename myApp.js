let express = require('express');
let app = express();
require('dotenv').config();


app.use("/public", express.static(__dirname + "/public"));
value = process.env.MESSAGE_STYLE;
console.log(value)
console.log(process.env.MESSAGE_STYLE)

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

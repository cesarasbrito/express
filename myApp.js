let express = require('express');
let app = express();

console.log("Hello World");

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
    //res.send('Hello Express');
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);

    //res.sendFile(absolutePath);
});



































 module.exports = app;

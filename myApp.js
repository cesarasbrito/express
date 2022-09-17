let express = require('express');
let app = express();

staticPath = __dirname + '/public';
console.log(staticPath);
app.use(express.static(staticPath))

app.get("/", function(req, res){
    //res.send('Hello Express');
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);

    //res.sendFile(absolutePath);
});



































 module.exports = app;

var express = require('express');
// var fs = require('fs');
// var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

// 미들웨어 설정
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require("./routes/home"));
app.use('/myPage', require("./routes/myPage"));
app.use('/abstract', require("./routes/artwork/abstract"));
app.use('/contemporary', require("./routes/artwork/contemporary"));
app.use('/modern', require("./routes/artwork/modern"));
app.use('/pop', require("./routes/artwork/pop"));
app.use('/stillLife', require("./routes/artwork/stillLife"));
app.use('/surrealism', require("./routes/artwork/surrealism"));

app.listen(30000, () => {
    console.log('server running');
});
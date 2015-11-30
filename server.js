
var fs = require("fs");
var express = require("express");
var bodyParser = require( "body-parser" );


var app = express();
// body-parserミドルウェアを有効化。（送信されてくるフォーマット：JSON）
app.use(bodyParser.json());
app.use(express.static( "build" ));
app.set("jsonp callback", true);

var json , queryText;

app.get( "/mesh" , function (req, res){
  console.log("get tasks");
  try {
    res.set('Content-Type', 'application/json');
    res.jsonp( { name : "on" } );
    json      = { mesh : req.query.name };
    fs.writeFile( "./mesh/switch.json" , JSON.stringify(json) );
    // console.log(req.query.name);
    res.status(200).end();
  } catch(e) {
    res.send([]);
  }
});

app.post("/mesh", function (req, res){
  console.log("post tasks");
  fs.writeFileSync("/mesh/switch.json", JSON.stringify(req.body));
  res.status(200).end();
});

//clientフォルダの中の静的ファイルを配信

console.log( "start listening at 8000" );
// app.listen(8000);
app.listen(process.env.PORT, process.env.IP);


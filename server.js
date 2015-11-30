
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
    //ajaxレスポンス  
    res.jsonp( { mesh : "on" } );
    json = { mesh : req.query.mesh };
    fs.writeFile( "./mesh/switch.json" , JSON.stringify(json) );
    console.log(req.query.mesh);
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


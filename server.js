var  fs         = require( 'fs' );
var  express    = require( 'express' );
var  bodyParser = require( 'body-parser' );

var app  = express();

// var port = process.env.PORT || 8000;

var
  Path = {
    json : './json/switch.json'
  };

// body-parserミドルウェアを有効化。
// app.use(express.favicon());
// app.use(express.favicon('./favicon.ico'));
app.use(bodyParser.json());
app.use(express.static( "build" ));
app.set("jsonp callback", true);

console.log( "start listening at 8000" );
// app.listen(8000);
app.listen(process.env.PORT || 8000);

app.get( "/hems" , function (req, res){
  // console.log( 'GET: /switch' );
  try {
    res.set('Content-Type', 'application/json');
    var data = JSON.parse( fs.readFileSync( Path.json , 'utf8' ) );
    res.json( data );
    // console.log( data )
    res.status(200).end();
  } catch(e) {
    console.log( 'GET: /switch: error!' )
  }
});

app.post("/off", function (req, res){
  try {
    // console.log( 'POST: /off:' + req.body );
    fs.writeFileSync( Path.json , JSON.stringify(req.body));
    res.status(200).end();
  } catch(e) {
    console.log( 'POST: /off: error!' )
  }
});

app.post("/on", function (req, res){
  try {
    console.log( 'POST: /on:' + req.body );
    fs.writeFileSync( Path.json , JSON.stringify(req.body));
    res.status(200).end();
  } catch(e) {
    console.log( 'POST: /on: error!' )
  }
});
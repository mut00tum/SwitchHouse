var
  fs         = require( 'fs' ),
  express    = require( 'express' ),
  bodyParser = require( 'body-parser' ),
  request    = require( 'request' ),
  app        = express();

var
  Json = {
    switch  : './json/switch.json',
    morning : './json/morning.json',
    day     : './json/day.json',
    night   : './json/night.json',
    yoga    : './json/yoga.json',
    air     : './json/air.json'
  },
  option = {
    uri  : 'https://pre.ideaGenerator.jp/api/',
    form: {
      id: 'mutoko',
      pw: 'b2vs8nit',
      mode : 'set',
      house_no : '160'
      // equipment_17 : Val
    }
  },
  Val = '';

app.use(bodyParser.json());
app.use(express.static( "build" ));
app.set("jsonp callback", true);

console.log( "start listening at 8000" );
// app.listen(8000);
app.listen(process.env.PORT || 8000);


app.post("/setHEMS", function (req, res){
  try {
    // console.log( req.url )
    var data = req.body;
    Object.keys(data).forEach(function(key){
      option.form[data[key].obj] = data[key].state;
    });

    var path = ''
    switch(data.time) {
      case 'morning':
        path = Json.morning;
        break;
      case 'day':
        path = Json.day;
        break;
      case 'night':
        path = Json.night;
        break;
      case 'yoga':
        path = Json.yoga;
        break;
      case 'air':
        path = Json.air;
        break;
    }

    if( !path == '' ){
      fs.writeFileSync( path , JSON.stringify(option.form) );
    }

    console.log( option.form )

    // SetAppRequest()

    res.status(200).end();

  } catch(e) {
    console.log( 'SET: /off: error!' )
  }
});


function SetAppRequest() {
  // console.log( option )
  request.post( option , function( error, response, body ){
    if( !error && response.statusCode == 200 ) {
      var data = JSON.parse( body );
      // console.log( data )
    } else {
      console.log( 'error: ' + response.statusCode );
    }
  });
}

function GetAppRequest() {

}

app.get( "/hems" , function (req, res){
  try {
    res.set('Content-Type', 'application/json');
    var data = JSON.parse( fs.readFileSync( Json.switch , 'utf8' ) );
    res.json( data );
    res.status(200).end();
  } catch(e) {
    console.log( 'GET: /switch: error!' )
  }
});

app.post("/off", function (req, res){
  try {
    fs.writeFileSync( Json.switch , JSON.stringify(req.body));
    res.status(200).end();
  } catch(e) {
    console.log( 'POST: /off: error!' )
  }
});

app.post("/on", function (req, res){
  try {
    SetAppRequest();
    // fs.writeFileSync( Json.switch , JSON.stringify(req.body));
    res.status(200).end();
  } catch(e) {
    console.log( 'POST: /on: error!' )
  }
});
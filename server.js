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
    air     : './json/air.json',
    house   : './json/house.json'
  },
  option = {
    uri  : 'https://pre.ideaGenerator.jp/api/',
    form: {
      id: 'mutoko',
      pw: 'b2vs8nit',
      house_no : '160'
    }
  },
  Val = '';

app.use(bodyParser.json());
app.use(express.static( "build" ));
app.set("jsonp callback", true);

console.log( "start listening at 8000" );
// app.listen(8000);
app.listen(process.env.PORT || 8000);

function updateHouseJson( path ) {
  option.form['mode'] = 'get'
  // console.log( option )
  request.post( option , function( error, response, body ){
    if( !error && response.statusCode == 200 ) {
      var json = JSON.parse( body );
      // console.log( json )
      fs.writeFileSync( path , JSON.stringify( json ) );
    } else {
      console.log( 'error: ' + response.statusCode );
    }
  });
}

function setAppRequest() {
  option.form['mode'] = 'set'
  request.post( option , function( error, response, body ){
    if( !error && response.statusCode == 200 ) {
      console.log( 'setAppRequest succeed!' )
    } else {
      console.log( 'error: ' + response.statusCode );
    }
  });
}

function switcher( set ) {
  var path = ''
    switch( set ) {
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
  return path;
}

app.post("/setHEMS", function (req, res){
  try {
    var data = req.body;
    Object.keys(data.State).forEach(function(key){
      option.form[data.State[key].obj] = data.State[key].state;
    });
    // console.log( option )
    res.status(200).end();

  } catch(e) {
    console.log( 'SET: /setHEMS: error!' )
  }
});

app.post("/setHouseJson", function (req, res){
  try {
    var data = req.body;
    Object.keys(data.State).forEach(function(key){
      option.form[data.State[key].obj] = data.State[key].state;
    });
    updateHouseJson( Json.house );
    res.status(200).end();
  } catch(e) {
    console.log( 'SET: /setHouseJson: error!' )
  }
});

app.post( "/loadSetState" , function (req, res){
  try {
    res.set('Content-Type', 'application/json');
    var data = req.body;
    var path = switcher( data.set )

    var data = JSON.parse( fs.readFileSync( path , 'utf8' ) );
    res.json( data );
    res.status(200).end();
  } catch(e) {
    console.log( 'GET: /loadSetState: error!' )
  }
});

app.get( "/loadHouseState" , function (req, res){
  try {
    res.set('Content-Type', 'application/json');
    var data = JSON.parse( fs.readFileSync( Json.house , 'utf8' ) );
    res.json( data );
    res.status(200).end();
  } catch(e) {
    console.log( 'GET: /loadHouseState: error!' )
  }
});

app.post("/on", function (req, res){
  try {
    setAppRequest();
    res.status(200).end();
  } catch(e) {
    console.log( 'POST: /on: error!' )
  }
});

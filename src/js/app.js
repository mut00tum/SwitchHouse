var setHEMS  = require( './hems/setHEMS' );
var radio    = require( './ui/radio' );
var observer = require( './watch/observer' );
var request  = require( './hems/request' );

//hems
setHEMS();

request().getJSONRequest();
// request().offRequest();
request().onRequestTest();
// var json = request().Json;

// console.log( json )

//watch
// observer();

// UI
radio();

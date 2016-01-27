var setHEMS      = require( './hems/setHEMS' );
var radio        = require( './ui/radio' );
var request      = require( './hems/request' );
var houseState = require( './hems/houseState' );

//hems

setHEMS();

setInterval( function(){
  request().getJsonRequest();
} , 2000 );
// request().getJsonRequest();
// request().offRequest();
// request().onRequestTest();

// console.log( request().getJsonData() )


// houseState();

// UI
radio();

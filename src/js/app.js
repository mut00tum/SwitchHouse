var setHEMS  = require( './hems/setHEMS' );
// var setROBOT = require( './hems/robot' );
var radio    = require( './ui/radio' );
var request  = require( './hems/request' );
// var houseState = require( './hems/houseState' );

//hems

setHEMS();
// setROBOT();

// setInterval( function(){
//   request().getJsonRequest();
// } , 1500 );

// request().getJsonRequest();
// request().offRequest();
// request().onRequestTest();

// houseState();

// UI
radio();

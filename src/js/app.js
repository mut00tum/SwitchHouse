var setHEMS = require( './hems/setHEMS' );
var request = require( './hems/request' );
var radio   = require( './ui/radio' );
var slide   = require( './ui/slide' );
// var setROBOT = require( './hems/robot' );

// ▼HEMS
setHEMS();

// ▼UI
radio();
slide();
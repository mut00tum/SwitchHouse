var setHEMS = require( './hems/setHEMS' );
var request = require( './hems/request' );
var radio   = require( './ui/radio' );
var eventManager   = require( './ui/eventManager' );
// var setROBOT = require( './hems/robot' );

// ▼HEMS
// setHEMS();
request();

// ▼UI
radio();
eventManager();
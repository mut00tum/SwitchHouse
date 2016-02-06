var request = require( './hems/request' );
var radio   = require( './ui/radio' );
var eventManager   = require( './ui/eventManager' );

// ▼HEMS
request();

// ▼UI
radio();
eventManager();
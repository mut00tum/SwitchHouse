var setHEMS  = require( './hems/setHEMS' );
var radio    = require( './ui/radio' );
var observer = require( './watch/observer' );
var request  = require( './hems/request' );

//hems
setHEMS();
request();

//watch
// observer();

// UI
radio();
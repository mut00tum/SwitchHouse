var request  = require( '../hems/request' );

module.exports = function observer() {

  function getMeshState() {
    
    // if ( state.neme == "on" ) {
    //   console.log("ONNNN!!");
    // }
    console.log( request() );
  }
  // getMeshState();
  setInterval( getMeshState , 1000);

}
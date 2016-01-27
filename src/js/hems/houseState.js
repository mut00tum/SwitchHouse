var Map     = require( './map' );
// var request = require( './request' );

module.exports = function HouseState() {

  function set( data ) {

    if ( data['switch'] == 'on' ){

      if ( $("#form") ){
        $("#form").submit();
        reloadIframe();
        // request().offRequest();
      }
      // Map().HEMSButton.on( 'click' , function(){
      //   reloadIframe();
      // });


      function reloadIframe() {
       var src = $("#monitor").attr("src");
        setTimeout(function(){
           $("#monitor").attr("src","");
           $("#monitor").attr("src",src);
        } , 250 );
      }
    }

  }

  return {
    set : set
  }

}
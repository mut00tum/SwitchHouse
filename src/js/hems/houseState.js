var Map     = require( './map' )();
// var request = require( './request' );
// var setHems = require( './setHEMS' );

module.exports = function HouseState() {

  function set( data ) {


     Map.HEMSButton.on( 'click' , function(){
        reloadIframe();
      });

    if ( data['switch'] == 'on' ){

      if ( $("#form") ){
        $("#form").submit();
        reloadIframe();
      }
    }

    function reloadIframe() {
      var src = $("#monitor").attr("src");
      setTimeout(function(){
         $("#monitor").attr("src","");
         $("#monitor").attr("src",src);
      } , 250 );
    }

  }

  return {
    set : set
  }

}
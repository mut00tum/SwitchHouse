var Map = require( '../map/id' )();

module.exports = function radio() {

  var
    morning   = Map.morning.find( '.choose' ),
    labelList = Map.setList.find( '.choose' );

  //init
  // changeProp( morning );
  morning.addClass('current');

  Map.setHEMS.on( 'click' , function(){
    setTarget();
  });
  Map.changeState.on( 'click' , function(){
    setTarget();
  });

  function setTarget() {
    var set = Map.setTitle.find( 'span' ).text();
    var id = $( '#' + set );
    if( set == 'house' ) {
      return false;
    } else {
      var target = id.find( '.choose' );
      changeProp( target );
    }

    function changeProp( target ) {
      labelList.removeClass('current');
      target.addClass('current');
    }

  }



}
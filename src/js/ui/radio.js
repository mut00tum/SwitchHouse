var Map = require( '../map/id' )();

module.exports = function radio() {

  var
    morning   = Map.morning.find( 'input[type="radio"]' ),
    labelList = Map.setList.find( '.choose' ),
    radioList = Map.setList.find( 'input[type="radio"]' );

  //init
  changeProp( morning );

  Map.setList.find( 'label' ).on( 'click' , function(){
    var self   = $( this );
    var target = self.find( 'input[type="radio"]' )
    changeProp( target );
  });

  function changeProp( t ) {
    // radioList.attr('checked', false);
    labelList.removeClass('current');
    // t.attr('checked', true);
    t.parent().addClass('current');
  }

}
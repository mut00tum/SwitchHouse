require( 'TweenMax' );
require( 'TimelineMax' );
var Map = require( '../map/id' )();

module.exports = function slide() {

  var
    view        = Map.view,
    listView    = Map.setList,
    settingVies = Map.setting,
    arrow       = Map.backArrow,
    timeTargets = Map.setList.find( '.item' );

  var
    SPEED = {
      GO   : .4,
      BACK : .25
    },
    EASE = {
      GO   : Power3.easeOut,
      BACK : Sine.easeOut
    },
    DELAY = {
      ARROW : .15
    };

  timeTargets.on( 'click' , function(){
    go( getWinWidth() );
    showArrow();
  });

  arrow.on( 'click' , function(){
    back( );
    hideArrow();
  });


  function getWinWidth() {
    return $( window ).width();
  }

  function go( w ) {
    TweenMax.to( view , SPEED.GO , {
      x : - w,
      ease : EASE.GO
    });
  }

  function back( ) {
    TweenMax.to( view , SPEED.BACK , {
      x : 0,
      ease : EASE.BACK
    });
  }

  function showArrow() {
    TweenMax.to( arrow , 0 , {
      display : 'block',
      delay   : DELAY.ARROW
    });
  }

  function hideArrow() {
    TweenMax.to( arrow , 0 , {
      display : 'none',
      delay   : DELAY.ARROW
    });
  }



}
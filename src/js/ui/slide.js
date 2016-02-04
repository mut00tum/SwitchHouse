require( 'TweenMax' );
require( 'TimelineMax' );
var Map = require( '../map/id' )();

module.exports = function slide() {

  var
    setView     = Map.setView,
    settingView = Map.settingView,
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

  //init
  set();

  timeTargets.on( 'click' , function(){
    go( getWinWidth() );
    showArrow();
  });

  arrow.on( 'click' , function(){
    back( getWinWidth() );
    hideArrow();
  });


  function getWinWidth() {
    return $( window ).width();
  }

  function set() {
    TweenMax.set( setView , {
      x : 0
    });
    TweenMax.set( settingView , {
      x : - getWinWidth()
    });
  }

  function go( w ) {
    TweenMax.to( setView , SPEED.GO , {
      x : - w,
      ease : EASE.GO
    });
    TweenMax.to( settingView , SPEED.GO , {
      x : 0,
      ease : EASE.GO
    });
  }

  function back( w ) {
    TweenMax.to( setView , SPEED.BACK , {
      x : 0,
      ease : EASE.BACK
    });
    TweenMax.to( settingView , SPEED.BACK , {
      x : - w,
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
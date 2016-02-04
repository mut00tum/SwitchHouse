require( 'TweenMax' );
require( 'TimelineMax' );
var Map     = require( '../map/id' )();
var request = require( '../hems/request' );

module.exports = function slide() {

  var
    setView     = Map.setView,
    settingView = Map.settingView,
    listView    = Map.setList,
    settingVies = Map.setting,
    arrow       = Map.backArrow,
    Sets = {
      morning : {
        map : Map.morning.find( '.item' ),
        state : { set : 'morning' }
      },
      day : {
        map : Map.day.find( '.item' ),
        state : { set : 'day' }
      },
      night : {
        map : Map.night.find( '.item' ),
        state : { set : 'night' }
      },
      yoga : {
        map : Map.yoga.find( '.item' ),
        state : { set : 'yoga' }
      },
      air : {
        map : Map.air.find( '.item' ),
        state : { set : 'air' }
      },
      house : {
        map : Map.house.find( '.item' ),
        state : { set : 'house' }
      }
    };

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

  Object.keys( Sets ).forEach( function(key){
    Sets[key].map.on( 'click' , function(){
      go( getWinWidth() );
      showArrow();
      request().getSetState( Sets[key].state );
    });
  });


  // timeTargets.on( 'click' , function(){
  //   go( getWinWidth() );
  //   showArrow();
  // });

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
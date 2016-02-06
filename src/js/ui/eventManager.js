require( 'TweenMax' );
require( 'TimelineMax' );
require( 'scrollTo' );
var Map     = require( '../map/id' )();
var Obj     = require( '../map/HEMSobj' )();
var request = require( '../hems/request' );

module.exports = function slide() {

  var
    setView     = Map.setView,
    settingView = Map.settingView,
    setList     = Map.setList,
    setting     = Map.setting,
    arrow       = Map.backArrow,
    reload      = Map.reload,
    setHEMS     = Map.setHEMS,
    changeState = Map.changeState,
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
      }
    },
    houseSet = {
      map   : Map.house.find( '.item' ),
      state : { set : 'house' }
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
    },
    HEADER_HEIGHT = 56;

  //init
  set();

  Object.keys( Sets ).forEach( function(key){
    Sets[key].map.on( 'click' , function(){
      setTitle( Sets[key].state.set );
      showVal().selectTag();
      hideReload();
      showBtn();
      go( getWinWidth() );
      request().setHouseJson();
      request().loadSetState( Sets[key].state );
    });
  });

  houseSet.map.on( 'click' , function(){
    setTitle( houseSet.state.set );
    showVal().houseVal();
    showReload();
    hideBtn();
    go( getWinWidth() );
    request().setHouseJson();
    setTimeout( function(){
      request().loadHouseState();
    } , 100 );
  });

  arrow.on( 'click' , function(){
    request().setHouseJson();
    back( getWinWidth() );
  });

  setHEMS.on( 'click' , function() {
    request().setReadyHems( getFormData() );
    back( getWinWidth() );
  });

  changeState.on( 'click' , function(){
    var result = confirm("この内容でセットしますか？");
    if(result){
      request().setReadyHems( getFormData() );
      setTimeout(function(){
        request().changeState();
      } , 500 );
      back( getWinWidth() );
    } else {
      return false;
    }
  })

  reload.on( 'click' , function(){
    request().loadHouseState();
  });

  function getWinWidth() {
    return $( window ).width();
  }

  function getFormData() {
    return data = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Map.Blind_01.val() },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Map.Blind_02.val() },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Map.Blind_03.val() },
        Air       : { obj: Obj.Air.obj_01 , state: Map.Air_switch.val() + Map.Air_mode.val() + Map.Air_temp.val() },
        Window_01 : { obj: Obj.Window.obj_01 , state: Map.Window_01.val() },
        Window_02 : { obj: Obj.Window.obj_02 , state: Map.Window_02.val() },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Map.LightEL_switch.val() + Map.LightEL_mode.val() + Map.LightEL_color.val() },
        Light     : { obj: Obj.Light.obj_01 , state: Map.Light.val() },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Map.SwitchHA.val() }
      },
      Set : Map.setTitle.find( 'span' ).text()
    };
  }

  function setTitle( set ) {
    var path = "files/img/set/" + set + '.png';
    Map.setTitle.find( 'img' ).attr( 'src' , path );
    Map.setTitle.find( 'span' ).text( set );
  }

  function set() {
    TweenMax.set( setView , {
      x : 0
    });
    TweenMax.set( settingView , {
      x : - getWinWidth()
    });
    hideReload();
  }

  function go( w ) {
    showArrow()
    TweenMax.to( setView , SPEED.GO , {
      x : - w,
      ease : EASE.GO
    });
    TweenMax.to( settingView , SPEED.GO , {
      x : 0,
      ease : EASE.GO
    });
    setTop( settingView );
  }

  function back( w ) {
    hideArrow()
    TweenMax.to( setView , SPEED.BACK , {
      x : 0,
      ease : EASE.BACK
    });
    TweenMax.to( settingView , SPEED.BACK , {
      x : - w,
      ease : EASE.BACK
    });
    setTop( setView );
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

  function showReload() {
    TweenMax.set( reload , {
      display : 'block'
    });
  }

  function hideReload() {
    TweenMax.set( reload , {
      display : 'none'
    });
  }

  function showBtn() {
    TweenMax.set( [setHEMS, changeState] , {
      display : 'block'
    });
  }

  function hideBtn() {
    TweenMax.set( [setHEMS, changeState] , {
      display : 'none'
    });
  }

  function showVal(){
    var
      status = Map.setBody.find( '.status' ),
      house  = Map.setBody.find( '.house' );
    function selectTag() {
      TweenMax.set( status , {
        display : 'block'
      });
      TweenMax.set( house , {
        display : 'none'
      });
    }
    function houseVal() {
      TweenMax.set( status , {
        display : 'none'
      });
      TweenMax.set( house , {
        display : 'block'
      });
    }
    return {
      selectTag : selectTag,
      houseVal : houseVal
    }
  }

  function setTop( parent ) {
    TweenMax.set( parent , {
      scrollTo : { y: - parent.position().top }
    });
  }

}
var Map = require( '../map/id' )();
var Obj = require( '../map/HEMSobj' )();

module.exports = function request() {

  var
    Status = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.lock },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.lock },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.lock },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.btn + Obj.Air.mode + Obj.Air.temp },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.lock },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.lock },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.btn + Obj.LightEL.mode + Obj.LightEL.color },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.btn },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.btn }
      },
      Set : 'morning'
    },
    morning = {
      set : 'morning'
    },
    day = {
      set : 'day'
    },
    night = {
      set : 'night'
    },
    yoga = {
      set : 'yoga'
    },
    air = {
      set : 'air'
    },
    house = {
      set : 'house'
    };

  function getHouseState() {
    var data = JSON.stringify( Status );

    $.ajax({
      type: 'POST',
      url: Map.Url + '/getHouseState',
      data: data,
      contentType: 'application/json',
      success: function( data ){
        console.log( 'getHouseState succeed!' );
      },
      error: function() {
        console.log("getHouseState 通信エラーです");
      }
    });
  }

  function getSetState( set ) {
    var data = JSON.stringify( set );

    $.ajax({
      type: 'POST',
      url: Map.Url + '/getSetState',
      data: data,
      contentType: 'application/json',
      success: function( data ){
        // console.log( data );
        console.log( 'getSetState succeed!' );
        setStatus( data );
      },
      error: function() {
        console.log("getSetState 通信エラーです");
      }
    });

    function setStatus( d ) {
      // console.log( d.equipment_3.substr( 0 , 4 ) )

      Map.Blind_01.val( d.equipment_17 );
      Map.Blind_02.val( d.equipment_18 );
      Map.Blind_03.val( d.equipment_19 );
      Map.Air_switch.val( d.equipment_20.substr( 0 , 4 ) );
      Map.Air_mode.val( d.equipment_20.substr( 4 , 4 ) );
      Map.Air_temp.val( d.equipment_20.substr( 8 , 4 ) );
      Map.Window_01.val( d.equipment_23 );
      Map.Window_02.val( d.equipment_24 );
      Map.LightEL_switch.val( d.equipment_3.substr( 0 , 4 ) );
      Map.LightEL_mode.val( d.equipment_3.substr( 4 , 4 ) );
      Map.LightEL_color.val( d.equipment_3.substr( 8 , 6 ) );
      Map.Light.val( d.equipment_15 );
      Map.Blind_01.val( d.equipment_17 );
      Map.SwitchHA.val( d.equipment_25 );

    }

  }

  // getHouseState( );
  // getSetState( yoga );

  return {
    getHouseState : getHouseState,
    getSetState   : getSetState
  }


}
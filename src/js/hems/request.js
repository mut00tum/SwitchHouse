var Map = require( '../map/id' )();
var Obj = require( '../map/HEMSobj' )();

module.exports = function request() {

  var
    getStatus = {
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
      Set : 'house'
    };

  function setHouseJson() {
    var houseData = JSON.stringify( getStatus );

    $.ajax({
      type: 'POST',
      url: Map.Url + '/setHouseJson',
      data: houseData,
      contentType: 'application/json',
      success: function( data ){
        console.log( 'setHouseJson succeed!' );
      },
      error: function() {
        console.log("setHouseJson 通信エラーです");
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
        console.log( 'getSetState succeed!' );
        setStatus( data );
      },
      error: function() {
        console.log("getSetState 通信エラーです");
      }
    });

    function setStatus( d ) {
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
      Map.LightEL_color.val( d.equipment_3.substr( 8 , 8 ) );
      Map.Light.val( d.equipment_15 );
      Map.SwitchHA.val( d.equipment_25 );
    }
  }

  function getHouseState( ) {

    $.ajax({
      type: 'GET',
      url: Map.Url + '/getHouseState',
      contentType: 'application/json',
      success: function( data ){
        // console.log( data )
        console.log( 'getHouseState succeed!' );
        setStatus( data );
      },
      error: function() {
        console.log("getHouseState 通信エラーです");
      }
    });

    function setStatus( d ) {

      var blind_01 = Object.keys(Obj.Blind).filter(function(k){ return Obj.Blind[k] == d.equipment_17 })[0];
      var blind_02 = Object.keys(Obj.Blind).filter(function(k){ return Obj.Blind[k] == d.equipment_18 })[0];
      var blind_03 = Object.keys(Obj.Blind).filter(function(k){ return Obj.Blind[k] == d.equipment_19 })[0];
      var air_switch = Object.keys(Obj.Air).filter(function(k){ return Obj.Air[k] == d.equipment_20.substr( 0 , 4 ) })[0];
      var air_mode = Object.keys(Obj.Air).filter(function(k){ return Obj.Air[k] == d.equipment_20.substr( 4 , 4 ) })[0];
      var air_temp = Object.keys(Obj.Air).filter(function(k){ return Obj.Air[k] == d.equipment_20.substr( 8 , 4 ) })[0];
      var window_01 = Object.keys(Obj.Window).filter(function(k){ return Obj.Window[k] == d.equipment_23 })[0];
      var window_02 = Object.keys(Obj.Window).filter(function(k){ return Obj.Window[k] == d.equipment_24 })[0];
      var lightEL_switch = Object.keys(Obj.LightEL).filter(function(k){ return Obj.LightEL[k] == d.equipment_3.substr( 0 , 4 ) })[0];
      var lightEL_mode = Object.keys(Obj.LightEL).filter(function(k){ return Obj.LightEL[k] == d.equipment_3.substr( 4 , 4 ) })[0];
      var lightEL_color = Object.keys(Obj.LightEL).filter(function(k){ return Obj.LightEL[k] == d.equipment_3.substr( 8 , 8 ) })[0];
      var light = Object.keys(Obj.Light).filter(function(k){ return Obj.Light[k] == d.equipment_15 })[0];
      var switchHA = Object.keys(Obj.SwitchHA).filter(function(k){ return Obj.SwitchHA[k] == d.equipment_25 })[0];


      Map.Blind_01_H.text( blind_01 );
      Map.Blind_02_H.text( blind_02 );
      Map.Blind_03_H.text( blind_03 );
      Map.Air_switch_H.text( air_switch );
      Map.Air_mode_H.text( air_mode );
      Map.Air_temp_H.text( air_temp );
      Map.Window_01_H.text( window_01 );
      Map.Window_02_H.text( window_02 );
      Map.LightEL_switch_H.text( lightEL_switch );
      Map.LightEL_mode_H.text( lightEL_mode );
      Map.LightEL_color_H.text( lightEL_color );
      Map.Light_H.text( light );
      Map.SwitchHA_H.text( switchHA );
    }
  }

  function setReadyHems( setData ){
    var data = JSON.stringify( setData );

    $.ajax({
      type: 'POST',
      url: Map.Url + '/setHEMS',
      data: data,
      contentType: 'application/json',
      success: function( data ){
        console.log( 'setHEMS succeed!' ); },
      error: function() {
        console.log("setHEMS 通信エラーです");
      }
    });
  }

  function changeState() {
    var
      obj  = { set : 'on' },
      data = JSON.stringify( obj );

    $.ajax({
      type: 'POST',
      url: Map.Url + '/on',
      data: data,
      contentType: 'application/json',
      success: function( data ){
        console.log( 'changeState succeed!' );
      },
      error: function() {
        console.log("changeState 通信エラーです");
      }
    });
  }

  return {
    setHouseJson  : setHouseJson,
    getSetState   : getSetState,
    getHouseState : getHouseState,
    setReadyHems  : setReadyHems,
    changeState   : changeState
  }
}
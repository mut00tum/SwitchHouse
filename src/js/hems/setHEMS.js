var Map = require( '../map/id' )();
var Obj = require( '../map/HEMSobj' )();

module.exports = function setHEMS() {

  var
    morning = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.open },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.open },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.open },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.on + Obj.Air.modeHeat + Obj.Air.temp23 },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.open },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.open },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.on + Obj.LightEL.modeColor + Obj.LightEL.blue },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.off },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.off }
      },
      Set : 'morning'
    },
    day = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.close },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.close },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.close },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.off + Obj.Air.modeHeat + Obj.Air.temp23 },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.close },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.close },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.off + Obj.LightEL.modeColor + Obj.LightEL.blue },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.off },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.off }
      },
      Set : 'day'
    },
    night = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.close },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.close },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.close },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.on + Obj.Air.modeHeat + Obj.Air.temp26 },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.close },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.close },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.on + Obj.LightEL.modeColor + Obj.LightEL.orange },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.on },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.off }
      },
      Set : 'night'
    },
    yoga = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.close },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.close },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.close },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.on + Obj.Air.modeHeat + Obj.Air.temp30 },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.close },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.close },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.on + Obj.LightEL.modeColor + Obj.LightEL.pink },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.off },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.on }
      },
      Set : 'yoga'
    },
    air = {
      State : {
        Blind_01  : { obj: Obj.Blind.obj_01 , state: Obj.Blind.open },
        Blind_02  : { obj: Obj.Blind.obj_02 , state: Obj.Blind.open },
        Blind_03  : { obj: Obj.Blind.obj_03 , state: Obj.Blind.open },
        Air       : { obj: Obj.Air.obj_01 , state: Obj.Air.off + Obj.Air.modeHeat + Obj.Air.temp30 },
        Window_01 : { obj: Obj.Window.obj_01 , state: Obj.Window.open },
        Window_02 : { obj: Obj.Window.obj_02 , state: Obj.Window.open },
        LightEL   : { obj: Obj.LightEL.obj_01 , state: Obj.LightEL.off + Obj.LightEL.modeColor + Obj.LightEL.pink },
        Light     : { obj: Obj.Light.obj_01 , state: Obj.Light.off },
        SwitchHA  : { obj: Obj.SwitchHA.obj_01 , state: Obj.SwitchHA.off }
      },
      Set : 'air'
    }

  function setHemsProp( setData ){
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

  setHemsProp( morning );

  Map.morning.on( 'click' , function() {
    setHemsProp( morning );
  });
  Map.day.on( 'click' , function() {
    setHemsProp( day );
  });
  Map.night.on( 'click' , function() {
    setHemsProp( night );
  });
  Map.yoga.on( 'click' , function() {
    setHemsProp( yoga );
  });
  Map.air.on( 'click' , function() {
    setHemsProp( air );
  });


}

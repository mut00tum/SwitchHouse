var Map = require( './map' );

module.exports = function setHEMS() {

  var
    URL = {
      pre : 'https://pre.ideagenerator.jp/api/',
      on  : 'https://www.ideaGenerator.jp/api/'
    }
    TextMap = {
      head :  String()
        + '<form id="form" action="' + URL.pre + '" target="f1" method="post">'
        + '<input name="id" value="mutoko" type="hidden" />'
        + '<input name="pw" value="b2vs8nit" type="hidden" />'
        + '<input name="mode" value="set" type="hidden" />'
    },
    HouseNo = {
      switchHouse : String()
        + '<input name="house_no" value="160" type="hidden" />',
      robotHouse : String()
        + '<input name="house_no" value="187" type="hidden" />'
    },
    Blind = {
      obj_01 : 'equipment_17',
      obj_02 : 'equipment_18',
      obj_03 : 'equipment_19',
      open  : 'E041',
      close : 'E042'
    },
    LightEL = {
      obj_01 : 'equipment_3',
      on  : '8030',
      off : '8031',
      modeNormal : 'B642',
      modeColor : 'B644',
      yellow : 'C0f9fb26',
      pink   : 'C0ff57a2'
    },
    Air = {
      obj_01 : 'equipment_20',
      obj_02 : 'equipment_21',
      obj_03 : 'equipment_22',
      on  : '8030',
      off : '8031',
      modeHeat : 'B043',
      temp23 : 'B317',
      temp26 :'B31A',//26℃
      temp30 : 'B31E'
    },
    Window = {
      obj_01 : 'equipment_23',
      obj_02 : 'equipment_24',
      open   : 'E041',
      close  : 'E042'
    },
    Light = {
      obj_01 : 'equipment_15',
      obj_02 : 'equipment_16',
      on     : '8030',
      off    : '8031',
      modeNormal : 'B642',
      modeColor : 'B644',
      orange : 'C0ff9f08',
      yellow : 'C0f9fb26',
      pink   : 'C0ff57a2',
      blue   : 'C03543ff'
    },
    SwitchHA = {
      obj_01 : 'equipment_25',
      on     : '8030',
      off    : '8031'
    },
    Speaker = {
      obj_01 : 'equipment_12',
      on     : '8030',
      off    : '8031'
    },
    Btn = {
      obj_01 : 'equipment_26',
      on     : '8030',
      off    : '8031'
    },
    TimeState = {
      morning : 'あさ',
      day     : 'ひる',
      night   : 'よる'
    }

  var
    HtmlMap ={
      morning : String()
        + TextMap.head
        + HouseNo.switchHouse
        + '<input name="' + Blind.obj_01 + '" value="' + Blind.open + '" type="hidden" />'
        + '<input name="' + Blind.obj_02 + '" value="' + Blind.open + '" type="hidden" />'
        + '<input name="' + Blind.obj_03 + '" value="' + Blind.open + '" type="hidden" />'
        + '<input name="' + LightEL.obj_01 + '" value="' + LightEL.off + '" type="hidden" />'
        + '<input name="' + Air.obj_01 + '" value="' + Air.off + '" type="hidden" />'
        + '<input name="' + Air.obj_02 + '" value="' + Air.on + Air.modeHeat + Air.temp26 + '" type="hidden" />'
        + '<input name="' + Air.obj_03 + '" value="' + Air.off + '" type="hidden" />'
        + '<input name="' + Window.obj_01 + '" value="' + Window.open + '" type="hidden" />'
        + '<input name="' + Window.obj_02 + '" value="' + Window.open + '" type="hidden" />'
        + '<input name="' + Light.obj_01 + '" value="' + Light.off + '" type="hidden" />'
        // + '<input name="' + Light.obj_01 + '" value="' + Light.on + Light.modeColor + Light.orange + '" type="hidden" />'
        + '<input name="' + Light.obj_02 + '" value="' + Light.off + '" type="hidden" />'
        + '<input name="' + SwitchHA.obj_01 + '" value="' + SwitchHA.off + '" type="hidden" />'
        + '<input name="' + Btn.obj_01 + '" value="' + Btn.off + '" type="hidden" />'
        + '<input class="on" type="submit" value="' + TimeState.morning + '" />'
        + '</form>',
      day : String()
        + '<form id="form" action="https://pre.ideagenerator.jp/api/" target="f1" method="post">'
        + '<input name="id" value="mutoko" type="hidden" />'
        + '<input name="pw" value="b2vs8nit" type="hidden" />'
        + '<input name="mode" value="set" type="hidden" />'
        + '<input name="house_no" value="160" type="hidden" />'
        //電動ブラインド
        + '<input name="equipment_2" value="EA42" type="hidden" />'
        //エアコン bedroom
        + '<input name="equipment_1" value="8031B319" type="hidden" />'
        //浴室暖房乾燥機
        + '<input name="equipment_5" value="B046" type="hidden" />'
        //エアコン living
        + '<input name="equipment_4" value="8031B319" type="hidden" />'
        //light
        + '<input name="equipment_3" value="8031" type="hidden" />'
        + '<input class="on" type="submit" value="ひる" />'
        + '</form>',
      night : String()
        + '<form id="form" action="https://pre.ideagenerator.jp/api/" target="f1" method="post">'
        + '<input name="id" value="mutoko" type="hidden" />'
        + '<input name="pw" value="b2vs8nit" type="hidden" />'
        + '<input name="mode" value="set" type="hidden" />'
        + '<input name="house_no" value="160" type="hidden" />'
        //電動ブラインド
        + '<input name="equipment_2" value="EA42" type="hidden" />'
        //エアコン bedroom
        + '<input name="equipment_1" value="8030B319" type="hidden" />'
        //浴室暖房乾燥機
        + '<input name="equipment_5" value="B042" type="hidden" />'
        //エアコン living
        + '<input name="equipment_4" value="8030B319" type="hidden" />'
        //light
        + '<input name="equipment_3" value="8030" type="hidden" />'
        + '<input class="on" type="submit" value="よる" />'
        + '</form>'
    };

    //init
    Map().HEMSButton.html( HtmlMap.morning );

    Map().morningHour.on( 'click' , function() {
      setButton('morning');
    });
    Map().dayHour.on( 'click' , function() {
      setButton('day');
    });
    Map().nightHour.on( 'click' , function() {
      setButton('night');
    });

    function setButton( hourString ) {
      //init
      Map().HEMSButton.html( '' );

      var hour;
      switch( hourString ) {
        case 'morning':
          hour = HtmlMap.morning;
          break;
        case 'day':
          hour = HtmlMap.day;
          break;
        case 'night':
          hour = HtmlMap.night;
          break;
      }

      Map().HEMSButton.html( hour );
    }

}

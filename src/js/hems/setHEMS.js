var Map = require( './map' );

module.exports = function setHEMS() {
  var
    HtmlMap ={
      morning : String()
        + '<form id="form" action="https://pre.ideagenerator.jp/api/" target="f1" method="post">'
        + '<input name="id" value="mutoko" type="hidden" />'
        + '<input name="pw" value="b2vs8nit" type="hidden" />'
        + '<input name="mode" value="set" type="hidden" />'
        + '<input name="house_no" value="160" type="hidden" />'
        //電動ブラインド
        + '<input name="equipment_2" value="EA41" type="hidden" />'
        //エアコン bedroom
        + '<input name="equipment_1" value="8030B317" type="hidden" />'
        //浴室暖房乾燥機
        + '<input name="equipment_5" value="B041" type="hidden" />'
        //エアコン living
        + '<input name="equipment_4" value="8030B317" type="hidden" />'
        //light
        + '<input name="equipment_3" value="8031" type="hidden" />'
        + '<input class="on" type="submit" value="あさ" />'
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

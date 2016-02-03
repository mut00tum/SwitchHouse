var Map = require( '../map/id' );

module.exports = function setHEMS() {

  var URL;
  var
    HouseNo = {
      switchHouse : String()
        + '<input name="house_no" value="160" type="hidden" />',
      robotHouse : String()
        + '<input name="house_no" value="187" type="hidden" />'
    },
    Robot = {
      obj_01 : 'equipment_1',
      on  : '8030',
      off : '8031',
      vib : 'E441',
      walk1 : 'E442',
      walk2 : 'E443'
    },
    TimeState = {
      robot : 'ロボット'
    };

  var
    HtmlMap ={
      robotON : String()
        // + TextMap.head
        + HouseNo.robotHouse
        + '<input name="' + Robot.obj_01 + '" value="' + Robot.on + Robot.walk1 + '" type="hidden" />'
        + '<input class="on" type="submit" value="' + TimeState.robot + '" />'
        + '</form>',
      robotOFF : String()
        // + TextMap.head
        + HouseNo.robotHouse
        + '<input name="' + Robot.obj_01 + '" value="' + Robot.off + '" type="hidden" />'
        + '<input class="on" type="submit" value="' + TimeState.robot + '" />'
        + '</form>'
    };

    var select = Map().selectVal.val();

    URL = select;

    Map().urlSelect.change( function(){
      select = Map().selectVal.val();
      URL = select;
      console.log( URL )
    });

    function getHead( url ) {
      return  String()
        + '<form id="form" action="' + url + '" target="f1" method="post">'
        + '<input name="id" value="mutoko" type="hidden" />'
        + '<input name="pw" value="b2vs8nit" type="hidden" />'
        + '<input name="mode" value="set" type="hidden" />'
    }

    //init
    Map().ROBOTButton.html( getHead( URL ) + HtmlMap.robotON );

    Map().robotON.on( 'click' , function() {
      setButton('robotON');
    });

    Map().robotOFF.on( 'click' , function() {
      setButton('robotOFF');
    });

    function setButton( hourString ) {
      //init
      Map().ROBOTButton.html( '' );

      var hour;
      switch( hourString ) {
        case 'robotON':
          hour = HtmlMap.robotON;
          break;
        case 'robotOFF':
          hour = HtmlMap.robotOFF;
          break;
      }

      Map().ROBOTButton.html( getHead( URL ) + hour );
    }

}

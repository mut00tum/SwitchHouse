module.exports = function Map() {

  var
    Url = {
      local : 'http://localhost:8000',
      heroku : 'http://the-hemshouse.herokuapp.com'
    };

  return {
    Url         : Url.local,
    HEMSButton  : $( '#HEMSButton' ),
    ROBOTButton : $( '#ROBOTButton' ),
    robotON     : $( '#robotON' ),
    robotOFF    : $( '#robotOFF' ),
    selectVal   : $( '#urlSelect option:selected' ),
    morning     : $( '#morning' ),
    day         : $( '#day' ),
    night       : $( '#night' ),
    yoga        : $( '#yoga' ),
    air         : $( '#air' )
  }
}
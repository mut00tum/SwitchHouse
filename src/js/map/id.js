module.exports = function Map() {

  var
    Url = {
      local : 'http://localhost:8000',
      heroku : 'http://the-hemshouse.herokuapp.com'
    };

  return {
    Url     : Url.heroku,
    view        : $( '#view' ),
    backArrow   : $( '#backArrow' ),
    setList     : $( '#setList' ),
    timeList    : $( '#timeList' ),
    styleList   : $( '#styleList' ),
    statusList  : $( '#statusList' ),
    morning     : $( '#morning' ),
    day         : $( '#day' ),
    night       : $( '#night' ),
    yoga        : $( '#yoga' ),
    air         : $( '#air' ),
    setting     : $( '#setting' ),
    setHeader   : $( '#setHeader' ),
    setBody     : $( '#setBody' ),
    setHEMS     : $( '#setHEMS' ),
    changeState : $( '#changeState' )
  }
}
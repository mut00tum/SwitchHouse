module.exports = function Map() {

  var
    Url = {
      local : 'http://localhost:8000',
      heroku : 'http://the-hemshouse.herokuapp.com'
    };

  return {
    Url            : Url.local,
    setView        : $( '#setView' ),
    backArrow      : $( '#backArrow' ),
    setList        : $( '#setList' ),
    settingView    : $( '#settingView' ),
    timeList       : $( '#timeList' ),
    styleList      : $( '#styleList' ),
    statusList     : $( '#statusList' ),
    morning        : $( '#morning' ),
    day            : $( '#day' ),
    night          : $( '#night' ),
    yoga           : $( '#yoga' ),
    air            : $( '#air' ),
    house          : $( '#house' ),
    setting        : $( '#setting' ),
    setHeader      : $( '#setHeader' ),
    setBody        : $( '#setBody' ),
    setHEMS        : $( '#setHEMS' ),
    changeState    : $( '#changeState' ),
    Blind_01       : $( '#Blind_01' ),
    Blind_02       : $( '#Blind_02' ),
    Blind_03       : $( '#Blind_03' ),
    Air_switch     : $( '#Air_switch' ),
    Air_mode       : $( '#Air_mode' ),
    Air_temp       : $( '#Air_temp' ),
    Window_01      : $( '#Window_01' ),
    Window_02      : $( '#Window_02' ),
    LightEL_switch : $( '#LightEL_switch' ),
    LightEL_mode   : $( '#LightEL_mode' ),
    LightEL_color  : $( '#LightEL_color' ),
    Light          : $( '#Light' ),
    SwitchHA       : $( '#SwitchHA' )
  }
}
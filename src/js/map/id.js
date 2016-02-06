module.exports = function Map() {

  var
    Url = {
      local : 'http://localhost:8000',
      heroku : 'http://the-hemshouse.herokuapp.com'
    };

  return {
    Url              : Url.heroku,
    setView          : $( '#setView' ),
    backArrow        : $( '#backArrow' ),
    setList          : $( '#setList' ),
    setTitle         : $( '#setTitle' ),
    settingView      : $( '#settingView' ),
    timeList         : $( '#timeList' ),
    styleList        : $( '#styleList' ),
    statusList       : $( '#statusList' ),
    morning          : $( '#morning' ),
    day              : $( '#day' ),
    night            : $( '#night' ),
    yoga             : $( '#yoga' ),
    air              : $( '#air' ),
    house            : $( '#house' ),
    setting          : $( '#setting' ),
    setHeader        : $( '#setHeader' ),
    reload           : $( '#reload' ),
    setBody          : $( '#setBody' ),
    setHEMS          : $( '#setHEMS' ),
    changeState      : $( '#changeState' ),
    Blind_01         : $( '#Blind_01' ),
    Blind_02         : $( '#Blind_02' ),
    Blind_03         : $( '#Blind_03' ),
    Air_switch       : $( '#Air_switch' ),
    Air_mode         : $( '#Air_mode' ),
    Air_temp         : $( '#Air_temp' ),
    Window_01        : $( '#Window_01' ),
    Window_02        : $( '#Window_02' ),
    LightEL_switch   : $( '#LightEL_switch' ),
    LightEL_mode     : $( '#LightEL_mode' ),
    LightEL_color    : $( '#LightEL_color' ),
    Light            : $( '#Light' ),
    SwitchHA         : $( '#SwitchHA' ),
    Blind_01_H       : $( '#Blind_01_H' ),
    Blind_02_H       : $( '#Blind_02_H' ),
    Blind_03_H       : $( '#Blind_03_H' ),
    Air_switch_H     : $( '#Air_switch_H' ),
    Air_mode_H       : $( '#Air_mode_H' ),
    Air_temp_H       : $( '#Air_temp_H' ),
    Window_01_H      : $( '#Window_01_H' ),
    Window_02_H      : $( '#Window_02_H' ),
    LightEL_switch_H : $( '#LightEL_switch_H' ),
    LightEL_mode_H   : $( '#LightEL_mode_H' ),
    LightEL_color_H  : $( '#LightEL_color_H' ),
    Light_H          : $( '#Light_H' ),
    SwitchHA_H       : $( '#SwitchHA_H' )
  }
}
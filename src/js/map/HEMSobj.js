module.exports = function objMap() {

  var
    Blind = {
      obj_01 : 'equipment_17',
      obj_02 : 'equipment_18',
      obj_03 : 'equipment_19',
      open  : 'E041',
      close : 'E042'
    },
    Air = {
      obj_01 : 'equipment_20',
      on  : '8030',
      off : '8031',
      modeHeat : 'B043',
      modeCool : 'B042',
      modeDry  : 'B044',
      modeWind : 'B045',
      temp23 : 'B317',
      temp26 :'B31A',
      temp30 : 'B31E'
    },
    Window = {
      obj_01 : 'equipment_23',
      obj_02 : 'equipment_24',
      open   : 'E041',
      close  : 'E042'
    },
    LightEL = {
      obj_01 : 'equipment_3',
      on  : '8030',
      off : '8031',
      modeNormal : 'B642',
      modeColor : 'B644',
      orange : 'C0ff9f08',
      yellow : 'C0f9fb26',
      pink   : 'C0ff57a2',
      blue   : 'C03543ff'
    },
    Light = {
      obj_01 : 'equipment_15',
      on     : '8030',
      off    : '8031'
    },
    SwitchHA = {
      obj_01 : 'equipment_25',
      on     : '8030',
      off    : '8031'
    },
    TimeState = {
      morning : 'あさ',
      day     : 'ひる',
      night   : 'よる',
      yoga    : 'ヨガ',
      air     : '換気'
    };

  return {
    Blind     : Blind,
    Air       : Air,
    Window    : Window,
    LightEL   : LightEL,
    Light     : Light,
    SwitchHA  : SwitchHA,
    TimeState : TimeState
  }
}
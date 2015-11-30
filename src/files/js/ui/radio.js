module.exports = function radio() {

  $('input[type="radio"]').change(function(){
      if($(this).is(':checked')){
          $('.choose').removeClass('current');
          $(this).parent().addClass('current');
      }else{
          $(this).parent().removeClass('current');
      }
  });

}
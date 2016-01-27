var houseState = require( './houseState' );

module.exports = function request() {

  var
    URL = {
      local : 'http://192.168.0.134:8000',
      heroku : 'http://the-hemshouse.herokuapp.com'
    },
    OFF = {
      prop : '/off',
      data : { switch : 'off' }
    },
    ON = {
      prop : '/on',
      data : { switch : 'on' }
    },
    GET = {
      prop : '/hems'
    },
    RequestJson;

  // function getJsonRequest(){
  //   $.ajax({
  //     type: 'GET',
  //     url: URL.heroku + GET.prop,
  //     // dataType:"jsonp",
  //     // jsonpCallback: 'callback',
  //     contentType: 'application/json',
  //     success: function( data ){
  //       action(data)
  //     },
  //     error: function(a, b, c ) {
  //       console.log("getJSONRequest 通信エラーです");
  //       console.log( a.state );
  //       console.log( b );
  //       console.log( c );
  //     }
  //   });

  //   function action( data ) {
  //     RequestJson = data;
  //     console.log( RequestJson )
  //     houseState().set( data );
  //     offRequest();
  //   }
  // }

  // function offRequest(){
  //   var data = JSON.stringify( OFF.data );

  //   $.ajax({
  //     type: 'POST',
  //     url: URL.heroku + OFF.prop,
  //     data: data,
  //     contentType: 'application/json',
  //     success: function(data){
  //       console.log( 'offRequest succeed!' );
  //     },
  //     error: function(a, b, c ) {
  //       console.log("offRequest 通信エラーです");
  //       console.log( a.state );
  //       console.log( b );
  //       console.log( c );
  //     }
  //   });
  // }

  // function onRequestTest(){
  //   var data = JSON.stringify( ON.data );

  //   $.ajax({
  //     type: 'POST',
  //     url: URL.local + ON.prop,
  //     data: data,
  //     contentType: 'application/json',
  //     success: function(data){
  //       console.log( 'onRequestTest succeed!' );
  //     },
  //     error: function(a, b, c ) {
  //       console.log("offRequest 通信エラーです");
  //       console.log( a.state );
  //       console.log( b );
  //       console.log( c );
  //     }
  //   });
  // }

  // console.log( getJsonData() )

  return {
    // getJsonRequest : getJsonRequest,
    // onRequestTest  : onRequestTest,
    // offRequest     : offRequest
  }



}
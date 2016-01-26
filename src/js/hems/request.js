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
      prop : '/switch'
    },
    Json;


// var MeshState = {};
  function getJSONRequest(){
    $.ajax({
      type: 'GET',
      url: URL.local + GET.prop,
      // data: { "mesh" : "on" },
      dataType:"jsonp",
      jsonpCallback: 'callback',
      success: function(data){
        Json = data;
        console.log( 'getJSONRequest: ' + data )
        console.log( data )
      },
      error: function(a, b, c ) {
        console.log("getJSONRequest 通信エラーです");
        console.log( a.state );
        console.log( b );
        console.log( c );
      }
    });
  }

  function offRequest(){

    var data = JSON.stringify( OFF.data );

    $.ajax({
      type: 'POST',
      url: URL.local + OFF.prop,
      data: data,
      contentType: 'application/json',
      success: function(data){
        console.log( 'offRequest succeed!' );
      },
      error: function(a, b, c ) {
        console.log("offRequest 通信エラーです");
        console.log( a.state );
        console.log( b );
        console.log( c );
      }
    });
  }

  function onRequestTest(){

    var data = JSON.stringify( ON.data );

    $.ajax({
      type: 'POST',
      url: URL.local + ON.prop,
      data: data,
      contentType: 'application/json',
      success: function(data){
        console.log( 'onRequestTest succeed!' );
      },
      error: function(a, b, c ) {
        console.log("offRequest 通信エラーです");
        console.log( a.state );
        console.log( b );
        console.log( c );
      }
    });
  }



  return {
    getJSONRequest : getJSONRequest,
    onRequestTest  : onRequestTest,
    offRequest     : offRequest,
    Json           : Json
  }
  // onRequest();
  // jsonRequest();

  // function getMeshState() {

  //   // onRequest();
  //   // offRequest();
  //   // if ( state.neme == "on" ) {
  //   //   console.log("ONNNN!!");
  //   // }
  //   console.log(  );
  // }

  // setInterval( getMeshState , 1000);



}
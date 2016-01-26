module.exports = function request() {

// var MeshState = {};
  function onRequest(){
    $.ajax({
      type: "GET",
      // url: "http://the-hemshouse.herokuapp.com/mesh",
      url: "http://localhost:8000/mesh",
      data: { "mesh" : "on" },//なんでもいい
      dataType:"jsonp",
      jsonpCallback: 'callback',
      success: function(data){
        // console.log(data)
        onSucceed(data);
      },
      error: function(a, b, c ) {
        console.log("通信エラーです");
        console.log( a.state );
        console.log( b );
        console.log( c );
      }
    });
  }

  function jsonRequest(){
    $.ajax({
      type: "GET",
      url: "http://the-hemshouse.herokuapp.com/mesh/localMesh/switch.json",
      // url: "http://192.168.0.134:8888/event/IoT/app/mesh/switch.json",
      // data: { "mesh" : "mesh"},//なんでもいい
      dataType:"jsonp",
      jsonpCallback: 'callback',
      success: function(data){
        console.log(data);
        // offSucceed(data);
      },
      error: function(a, b, c ) {
        console.log("通信エラーです");
        console.log( a.state );
        console.log( b );
        console.log( c );
      }
    });
  }

  function onSucceed(data) {
    var dataOn = data;
    console.log(dataOn);

    return data;
  }

  // function offSucceed(data) {
  //   var dataOn = data;
  //   console.log(dataOn);

  //   return data;
  // }

  onRequest();
  jsonRequest();

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
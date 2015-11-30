module.exports = function request() {

// var MeshState = {};
  function onRequest(){
    $.ajax({
      type: "GET",
      url: "http://the-hemshouse.herokuapp.com/mesh",
      // url: "http://localhost:8000/mesh",
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

  // function offRequest(){
  //   $.ajax({
  //     type: "GET",
  //     url: "http://the-hemshouse.herokuapp.com/mesh",
  //     data: { "mesh" : "off" },//なんでもいい
  //     dataType:"jsonp",
  //     jsonpCallback: 'callback',
  //     success: function(data){
  //       console.log(data)
  //       // offSucceed(data);
  //     },
  //     error: function() {
  //       console.log("通信エラーです");
  //     }
  //   });
  // }

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
  // offRequest();

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
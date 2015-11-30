module.exports = function request() {

  function request() {

    // var url = 'https://pre.ideagenerator.jp/api/';

    $.ajax({
      type: "GET",
      url: "http://localhost:8000/mesh",
      data: { "mesh" : "on" },
      dataType:"jsonp",
      jsonpCallback: 'callback',
      success: function(data){
        console.log(data)
      },
      error: function() {
        console.log("通信エラーです");
      }
    });
  }

  request();

}
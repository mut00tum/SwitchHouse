module.exports = function observer() {

  $(document).on( 'ready' , function(){
    // 対象ノードを選択
  var target = document.querySelector('body');
   
  // オブザーバインスタンスを作成
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation.type);
    });    
  });
   
  // オブザーバの設定
  var config = { subtree: true, childList: true, characterData: true }
   
  // 対象ノードとオブザーバの設定を渡す
  observer.observe(target, config);
   
  // 後ほど、監視を中止
  // observer.disconnect();
  });
  

}
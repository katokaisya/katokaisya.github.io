$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
//アコーディオンvar ac=document.getElementById("acco");
document.getElementById("acco1");addEventListener("click",reS,false);
document.getElementById("acco2");addEventListener("click",reS,false);
document.getElementById("acco3");addEventListener("click",reS,false);
function reS(){
	console.log(event.target);
	//event.target.style.backgroundImage = 'url(css/img/close.png)';
	event.target.classList.toggle('active');
}

//メニュー
$(function(){
    $(".menubtn").click(function(){
        $("#menu").toggleClass('togmenu');
    });
});


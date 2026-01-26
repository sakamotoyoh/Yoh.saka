//表示する文字
var str = "一文字ずつ表示します。";
var timerID = null;

function hyoji(){
  //現在の文字数
var cnt = document.timer.moji.value.length;

//まだ全部表示されていない場合
if (cnt < str.length) {
 document.timer.moji.value = str.substr(0,cnt + 1);
}else {
//全て表示されたらリセット
  document.timer.moji.value = "";
 }
}

function starfnc() {
//多重起動防止
 if (timerID === null){
   timerID  = setInterval(hyoji,1000);
 }
}

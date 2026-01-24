function hyouji17(){
//表示する文字
var str17 = "１文字ずつ表示します。";
//テキストボックスの文字数
var cnt17 = document.timer17.moji!'.value.length;
//文字が全部表示されているか確認する
if( cut17<11){
//現在より１文字多く切り出して表示
document.timer17.moji17.value = str17.substr(0,cnt17+1);}
else{
//全て表示させたら、空文字に戻す
document.timer17.moji17.value = "";}
//setTimeout()を含む関数を呼び出す
setTimeout("hyouji17()",1000);}

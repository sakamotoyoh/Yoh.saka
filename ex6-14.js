// 画像の要素をIDで取得します
const myImage document.getElementById('myPhoto1'); // = がない可能性
// 最初の写真のファイル名を定義します
const photoisrc = "image/WIN_28260128_2145_56_Pro.jpg"; // 変数名、閉じ記号に誤り
// 2枚目の写真のファイル名を定義します
const photo2Src = "image/NIN_20260128_21_45_54_Pro.jpg"; // 閉じ記号に誤り
// 写真を2枚目のものに切り替える関数
function changeToPhoto2() {
  myImage.src = photo25rc; // 変数名が違う
}
// 写真を元のもの (1枚目)に戻す関数
function changeToPhoto1() {
  myImage.src photo1Src; // = がない、変数名が違う
}

// 画像の要素をIDで取得します (IDが'myPhoto1'であることを想定)
const myImage = document.getElementById('myPhoto1');

// 最初の写真のファイル名を定義します
const photo1Src = "image/WIN_28260128_2145_56_Pro.jpg"; // 変数名を修正し、ダブルクォーテーションで統一

// 2枚目の写真のファイル名を定義します
const photo2Src = "image/NIN_20260128_21_45_54_Pro.jpg"; // 変数名を修正し、ダブルクォーテーションで統一

// 写真を2枚目のものに切り替える関数
function changeToPhoto2() {
  myImage.src = photo2Src; // 正しい変数名に変更
}

// 写真を元のもの (1枚目)に戻す関数
function changeToPhoto1() {
  myImage.src = photo1Src; // = を追加し、正しい変数名に変更
}

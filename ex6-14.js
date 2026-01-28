// 画像の要素をIDで取得します
const myImage = document.getElementById('myPhoto');

// 最初の写真のファイル名を定義します
const photo1Src = 'my_face_closed.jpg'; // 自分の最初の写真のファイル名に変更してください
// 2枚目の写真のファイル名を定義します
const photo2Src = 'my_face_open.jpg'; // 自分の2枚目の写真のファイル名に変更してください

// 写真を2枚目のものに切り替える関数
function changeToPhoto2() {
  myImage.src = photo2Src;
}

// 写真を元のもの（1枚目）に戻す関数
function changeToPhoto1() {
  myImage.src = photo1Src;
}

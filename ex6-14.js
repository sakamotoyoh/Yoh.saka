// 画像の要素をIDで取得（HTML側で id="myPhoto1" を設定していること）
const myImage = document.getElementById("myPhoto1");

// 写真ファイルのパス（HTML・実ファイル名と完全一致させる）
const photo1Src = "image/MIN_20260128_21_45_56_Pro.jpg";
const photo2Src = "image/MIN_20260128_21_45_54_Pro.jpg";

// 写真を2枚目に切り替える関数
function changeToPhoto2() {
  if (myImage) {
    myImage.src = photo2Src;
  }
}

// 写真を1枚目に戻す関数
function changeToPhoto1() {
  if (myImage) {
    myImage.src = photo1Src;
  }
}

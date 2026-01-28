// 画像を切り替える関数
function changePhoto() {
  // 画像を2枚目に変更
  document.getElementById("myPhoto").src = "images/WIN_20260128_21_45_54_Pro.jpg";

  // 3秒後に元の画像へ戻す
  setTimeout(returnPhoto, 3000);
}

// 元の画像に戻す関数
function returnPhoto() {
  document.getElementById("myPhoto").src = "images/WIN_20260128_21_45_56_Pro.jpg";
}

// 画像を切り替える関数
function changePhoto() {
  // 画像を2枚目に変更
  document.getElementById("myPhoto").src = "images/image/WIN_20260128_21_29_27_Pro.jpg";

  // 3秒後に元の画像へ戻す
  setTimeout(returnPhoto, 3000);
}

// 元の画像に戻す関数
function returnPhoto() {
  document.getElementById("myPhoto").src = "image/WIN_20260128_21_29_25_Pro.jpg";
}

// 写真を2枚目に切り替える関数
function changePhoto() {
  document.getElementById("myPhoto").src = "images/photo2.jpg";
}

// 元の写真に戻す関数
function resetPhoto() {
  document.getElementById("myPhoto").src = "images/photo1.jpg";
}

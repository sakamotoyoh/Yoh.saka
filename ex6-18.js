function changePhoto() {
  document.getElementById("myPhoto").src =
    "image/WIN_20260128_21_29_25_Pro.jpg";

  setTimeout(returnPhoto, 3000);
}

function returnPhoto() {
  document.getElementById("myPhoto").src =
    "image/WIN_20260128_21_29_27_Pro.jpg";
}

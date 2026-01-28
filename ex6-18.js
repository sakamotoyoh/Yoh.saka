function changePhoto() {
  document.getElementById("myPhoto").src =
    "images/MINI_20260128_21_45_54_Pro.jpg";

  setTimeout(returnPhoto, 3000);
}

function returnPhoto() {
  document.getElementById("myPhoto").src =
    "images/MINI_20260128_21_45_56_Pro.jpg";
}

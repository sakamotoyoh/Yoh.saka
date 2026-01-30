function changePhoto614() {
  // getElementById のスペルと大文字小文字を修正
  const myImage = document.getElementById("myPhoto1");
  if (!myImage) return;
    // '56.jpg' の画像パス (フォルダ名 'Image' は大文字)
    myImage.src = "image/WIN_20260128_21_45_56_Pro.jpg";
  }

function returnPhoto614() {
  // getElementById のスペルと大文字小文字を修正
  const myImage = document.getElementById("myPhoto1");
  if (!myImage) return;
    // '54.jpg' の画像パス (フォルダ名 'image' は小文字)
    myImage.src = "image/WIN_20260128_21_45_54_Pro.jpg";
  }

// 画像の要素をIDで取得(HTMLで id="myphotos" を設定していること)
const myImage = document.getElementById("myphotos");

// 写真ファイルのパス(HTML・実ファイル名と完全一致させる)
const photossrc = "Image/20200128_21_45_54_Pro.jpg";
const photo2src = "Image/MINI_20200128_21_45_54_Pro.jpg";

// 写真を2枚目に切り替える関数
function changeToPhoto2() {
    if (myImage) {
        myImage.src = photo2src;
    }
}

// 写真を1枚目に戻す関数
function changeToPhoto1() {
    if (myImage) {
        myImage.src = photossrc;
    }
}

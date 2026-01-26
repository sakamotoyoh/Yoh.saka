// 元の画像と変更後の画像のファイル名を定義します。必要に応じて変更してください。
const ORIGINAL_IMAGE_SRC = 'original.jpg';
const CHANGED_IMAGE_SRC = 'changed.jpg';
const TIMEOUT_DURATION = 3000; // 3秒 (ミリ秒単位)

/**
 * 画像を変更し、3秒後に元に戻す関数
 */
function changeImageOnce() {
    const imageElement = document.getElementById('myImage');

    // 変更後の画像に切り替えます
    imageElement.src = CHANGED_IMAGE_SRC;

    // 3秒後に元の画像に戻す処理をスケジュールします
    setTimeout(function() {
        imageElement.src = ORIGINAL_IMAGE_SRC;
    }, TIMEOUT_DURATION); // setTimeoutの第2引数はミリ秒単位
}


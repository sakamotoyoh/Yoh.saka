function checkLeapYear() {
    // 入力された値を取得
    const year = Number(document.getElementById("yearInput").value);
    const resultArea = document.getElementById("resultArea");

    // 入力チェック
    if (isNaN(year) || year <= 0) {
        resultArea.textContent = "有効な西暦年を入力してください。";
        return;
    }

    // うるう年判定
    let message;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        message = year + "年はうるう年です。";
    } else {
        message = year + "年はうるう年ではありません。";
    }

    // 結果表示
    resultArea.textContent = message;
}

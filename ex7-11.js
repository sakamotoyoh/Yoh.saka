function checkLeapYearFromInput() {
    // HTMLの入力欄から値を取得
    const yearInput = document.getElementById('yearInput');
    const year = parseInt(yearInput.value, 10);
    const resultDiv = document.getElementById('result');

    // 入力が無効な場合の処理
    if (isNaN(year) || year < 1) {
        resultDiv.textContent = '有効な西暦年を入力してください。';
        resultDiv.className = 'common';
        return;
    }

    // うるう年の条件判定ロジック
    // (4で割り切れる AND 100で割り切れない) OR (400で割り切れる)
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultDiv.textContent = year + '年はうるう年です。';
        resultDiv.className = 'leap'; // 青色で表示
    } else {
        resultDiv.textContent = year + '年は平年です。';
        resultDiv.className = 'common'; // 赤色で表示
    }
}

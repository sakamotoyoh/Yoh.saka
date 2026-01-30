function calcBMI() {
    // 1. 入力された身長と体重の値を取得する
    const h = document.getElementById('height1').value;
    const w = document.getElementById('weight1').value;

    // 2. 身長をcmからmに変換する
    const hm = h / 100;

    // 3. BMIを計算する（体重 ÷ 身長の2乗）
    const bmi = w / (hm * hm);

    // 4. 結果を表示する
    document.getElementById('result').innerText = 'BMIは' + bmi + 'です';
}

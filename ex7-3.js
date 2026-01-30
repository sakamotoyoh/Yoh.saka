function calcBMI() {
  // 1. 入力された身長と体重の値を取得する
  const heightStr = document.getElementById('height1').value;
  const weightStr = document.getElementById('weight1').value;

  // 2. 身長をcmからmに変換する（数値型に変換）
  // Number() 関数を使用して文字列を数値に変換しています
  const heightM = Number(heightStr) / 100;

  // 3. BMIを計算する(体重÷身長の2乗)
  const bmi = Number(weightStr) / (heightM * heightM);

  // 4. 結果を表示する
  document.getElementById('result').innerText = 'BMIは' + bmi.toFixed(2) + 'です';
}

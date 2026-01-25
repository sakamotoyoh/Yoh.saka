function calculateBMI() {
  // 1. 身長と体重の入力値を取得
  const height_cm = document.getElementById('height_input').value;
  const weight_kg = document.getElementById('weight_input').value;

  // 2. 身長をメートルに変換 (例: 165cm -> 1.65m)
  const height_m = height_cm / 100;

  // 3. BMIを計算
  const bmi = weight_kg / (height_m * height_m);

  // 4. 結果をHTMLに表示（小数点第2位まで表示する例）
  document.getElementById('result_bmi').textContent = bmi.toFixed(2);

  // 5. 判定結果を表示する（応用編）
  let status = '';
  if (bmi < 18.5) {
    status = 'やせ型';
  } else if (bmi >= 18.5 && bmi < 25) {
    status = '普通体重';
  } else {
    status = '肥満'; // BMI 25以上は肥満と判定される
  }
  document.getElementById('result_status').textContent = status;
}


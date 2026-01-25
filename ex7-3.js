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

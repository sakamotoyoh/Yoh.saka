function calcBMI() {
  // 入力値を取得
  const heightInput = document.getElementById("height2").value;
  const weightInput = document.getElementById("weight2").value;

  // 未入力チェック
  if (heightInput === "" || weightInput === "") {
    document.getElementById("result2").textContent =
      "身長と体重を入力してください。";
    return;
  }

  // 数値に変換
  const heightMeters = Number(heightInput) / 100;
  const weightKg = Number(weightInput);

  // BMI計算
  const bmi = weightKg / (heightMeters * heightMeters);

  // 判定
  let message;
  if (bmi < 18.5) {
    message = "低体重";
  } else if (bmi < 25) {
    message = "普通体重";
  } else {
    message = "肥満";
  }

  // 結果表示
  document.getElementById("result2").textContent =
    "BMIは " + bmi.toFixed(2) + " です（判定：" + message + "）";
}

function calcBMI() {
  // 身長と体重を取得
  let height = document.getElementById("height1").value;
  let weight = document.getElementById("weight1").value;

  // cm → m に変換
  height1 = height1 / 100;

  // BMI計算
  let bmi = weight1 / (height1 * height1);

  // 結果を表示（小数第2位まで）
  document.getElementById("result1").textContent =
    "あなたのBMIは " + bmi.toFixed(2) + " です";
}

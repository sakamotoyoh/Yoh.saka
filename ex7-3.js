function calcBMI() {
  // 身長と体重を取得
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // cm → m に変換
  height = height / 100;

  // BMI計算
  let bmi = weight / (height * height);

  // 結果を表示（小数第2位まで）
  document.getElementById("result").textContent =
    "あなたのBMIは " + bmi.toFixed(2) + " です";
}

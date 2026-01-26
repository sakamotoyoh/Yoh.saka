function calcBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  // cm → m
  height = height / 100;

  // BMI計算
  let bmi = weight / (height * height);

  let message = "";

  // 判定（問題文どおりのif構造）
  if (bmi < 18.5) {
    message = "低体重";
  } else {
    if (bmi < 25) {
      message = "普通";
    } else {
      message = "肥満";
    }
  }

  document.getElementById("result").textContent =
    "BMIは " + bmi.toFixed(2) + " です（判定：" + message + "）";
}
</html>

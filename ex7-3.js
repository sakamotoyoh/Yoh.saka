function calcBMI() {
  // 身長と体重を取得
  let height = document.getElementById("height1").value;
  let weight = document.getElementById("weight1").value;

  // mに変換するため数値型に変換
  // Number() 関数を使用して文字列を数値に変換しています
  height = Number(height) / 100;

  // 計算
  let bmi = weight / (height * height);

  // 結果を表示(小数第2位まで)
  document.getElementById("result1").textContent = "あなたのBMIは" + bmi.toFixed(2) + "です";
}

function calcBMI() {
    // HTML要素から値を取得
    let heightInput = document.getElementById("height2").value;
    let weightInput = document.getElementById("weight2").value;
    
    // 数値に変換し、身長はメートル単位に変換 (重要!)
    let heightMeters = Number(heightInput) / 100;
    let weightKg = Number(weightInput);
    
    // BMIを計算
    let bmiValue = weightKg / (heightMeters * heightMeters);
    let message;
    
    // 判定
    if (bmiValue < 18.5) {
        message = "低体重";
    } else {
        if (bmiValue < 25) {
            message = "普通";
        } else {
            message = "肥満";
        }
    }
    
    // 結果をHTML要素に出力
    document.getElementById("result2").textContent =
        "BMIは" + bmiValue.toFixed(2) + "です(判定:" + message + ") ";
}

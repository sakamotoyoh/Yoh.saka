function calculateBMI(weight, height) {
    // 身長はメートル単位で入力されることを想定
    const bmi = weight / (height * height); // BMI計算式
    let resultMessage = "";

    // 画像の指示に従った条件分岐
    if (bmi < 18.5) {
        resultMessage = "低体重";
    } else if (bmi >= 18.5 && bmi < 25) { // 18.5以上 25未満
        resultMessage = "普通";
    } else {
        // ここに到達した場合は自動的に25以上が確定
        resultMessage = "肥満";
    }

    // BMIは小数点第2位まで表示する例
    return `あなたのBMIは ${bmi.toFixed(2)} で、判定は「${resultMessage}」です。`;
}

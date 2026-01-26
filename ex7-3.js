// ユーザーからの入力を受け取る
// 身長はcm単位で入力されることを想定
const heightCm = prompt("身長をセンチメートル(cm)で入力してください例: 170)");
const weightKg = prompt("体重をキログラム(kg)で入力してください例: 65)");

// 入力が有効な数値であることを確認
if (heightCm && weightKg && !isNaN(heightCm) && !isNaN(weightKg)) {
    // 身長をメートルに変換 (例: 170cm -> 1.7m)
    const heightM = heightCm / 100;

    // BMIを計算
    // BMI = 体重(kg) / (身長(m) * 身長(m))
    const bmi = weightKg / (heightM * heightM);

    // 結果を小数点以下1桁に丸めて表示
    alert(`あなたのBMIは ${bmi.toFixed(1)} です。`);
} else {
    alert("無効な入力です。数値で入力してください。");
}

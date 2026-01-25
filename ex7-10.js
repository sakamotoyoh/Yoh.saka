<script>
    // 画像のHTMLから呼び出される calculateBMI 関数を定義
    function calculateBMI() {
        // HTML要素から入力値を取得
        const heightCm = document.getElementById('height_input').value;
        const weightKg = document.getElementById('weight_input').value;

        // バリデーション（数値であること、正の値であることを確認）
        if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
            document.getElementById('result_status').textContent = "有効な値を入力してください。";
            document.getElementById('result_bmi').textContent = "";
            return;
        }

        // 身長をメートルに変換 (cm -> m)
        const heightM = parseFloat(heightCm) / 100; 
        const weight = parseFloat(weightKg);

        // BMIを計算
        const bmi = weight / (heightM * heightM);

        // 判定ロジック
        let status = "";
        if (bmi < 18.5) {
            status = "低体重";
        } else if (bmi < 25) {
            status = "普通";
        } else {
            status = "肥満";
        }

        // 結果をHTML要素に表示
        document.getElementById('result_bmi').textContent = bmi.toFixed(2); // 小数点第2位まで
        document.getElementById('result_status').textContent = status;
    }
</script>

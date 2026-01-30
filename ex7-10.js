function calcBMI() {
      const heightInput = document.getElementById("height2").value;
      const weightInput = document.getElementById("weight2").value;
      const result = document.getElementById("result2");

      if (heightInput === "" || weightInput === "") {
        result.textContent = "身長と体重を入力してください。";
        return;
      }

      const heightMeters = Number(heightInput) / 100;
      const weightKg = Number(weightInput);

      if (heightMeters <= 0 || weightKg <= 0) {
        result.textContent = "正しい数値を入力してください。";
        return;
      }

      const bmi = weightKg / (heightMeters * heightMeters);

      let message;
      if (bmi < 18.5) {
        message = "低体重";
      } else if (bmi < 25) {
        message = "普通体重";
      } else {
        message = "肥満";
      }

      result.textContent =
        `BMIは ${bmi.toFixed(2)} です（判定：${message}）`;
    }

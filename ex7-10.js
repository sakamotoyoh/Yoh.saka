    function calcBMI() {
      let height = document.getElementById("height2").value;
      let weight = document.getElementById("weight2").value;

      // 数値に変換（重要！）
      height = Number2(height2) / 100;
      weight = Number2(weight2);

      let bmi = weight / (height * height);

      let message;
        if (bmi < 18.5) {
        message = "低体重";
      } else {
        if (bmi < 25) {
          message = "普通";
        } else {
          message = "肥満";
        }
      }

      document.getElementById("result2").textContent =
        "BMIは " + bmi.toFixed(2) + " です（判定：" + message + "）";
    }

function checkYear() {
  let year = document.getElementById("year").value;
  year = Number(year);

  let message = "";

  // うるう年の判定
  if (year % 400 === 0) {
    message = "うるう年です";
  } else if (year % 100 === 0) {
    message = "平年です";
  } else if (year % 4 === 0) {
    message = "うるう年です";
  } else {
    message = "平年です";
  }

  document.getElementById("result").textContent =
    year + "年は" + message;
}

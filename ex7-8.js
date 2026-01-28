function nazo78() {
  const answerValue = document.getElementById('answer78').value.trim();

  // 正解が「夢」の場合のみ「あたり！」とする
  if (answerValue === '夢') {
    alert('あたり!');
  } else {
    // それ以外（「ゆめ」を含む）の場合は「はずれ！」
    alert('はずれ!');
  }
}

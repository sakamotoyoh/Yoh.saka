function nazo77(){
  const answerValue = document.getElementById('answer77').value.trim();

  // 正解が「夢」の場合のみ「あたり！」
  if (answerValue === '夢') {
    alert('あたり!');
  } else {
    // それ以外の場合は「はずれ！」
    alert('はずれ!');
  }
}


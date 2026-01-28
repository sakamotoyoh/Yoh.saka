function nazo79() {
  const answerValue = document.getElementById('answer79').value; // 値を取得

  if (answerValue === '夢') { // 厳密な等価性比較 (===) を使用
    alert('あたり!');
  } else if (answerValue === 'ゆめ') { // こちらも === に変更
    alert('あたり!');
  } else {
    alert('ハズレ'); // 上記いずれにも当てはまらない場合のハズレ
  }
}


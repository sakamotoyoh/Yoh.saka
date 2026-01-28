function nazo79() {
  const answerValue = document.getElementById('answer79').value; // 値を変数に入れて再利用

  if (answerValue === '夢') { // 比較演算子 === を使うのがより良いプラクティスです
    alert('あたり!');
  } else if (answerValue === 'ゆめ') {
    alert('あたり!');
  } else {
    alert('ハズレ'); // 上記いずれにも当てはまらない場合のハズレ
  }

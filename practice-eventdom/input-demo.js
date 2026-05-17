b = document.querySelector('button#print');
b.addEventListener('click', greeting);
// function greeting() {
//     console.log('こんにちは');
// }

function greeting() {
    // input要素を取得
    let i = document.querySelector('input[name="shimei"]');
    // input要素のvalueプロパティを取得
    let shimei = i.value;
    // あいさつの文字列を作成
    let aisatu = 'こんにちは、' + shimei + 'さん';
    // p要素を取得して、あいさつの文字列を表示
    let p = document.querySelector('p#message');
    // p要素のtextContentプロパティにあいさつの文字列を代入
    p.textContent = aisatu;
}
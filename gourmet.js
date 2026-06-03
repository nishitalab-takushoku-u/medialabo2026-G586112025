// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let i = 1;
  for (let shop of data.results.shop) {
    console.log(i + '件目の検索結果');
    console.log('店舗名: ' + shop.name);
    console.log('住所: ' + shop.address);
    console.log('予算: ' + shop.budget.name);
    console.log('アクセス情報: ' + shop.access);
    console.log('ジャンル: ' + shop.genre.name);
    console.log('キャッチコピー: ' + shop.catch);
    console.log('営業時間: ' + shop.open);
    console.log('閉店時間: ' + shop.close);
    console.log('最寄駅: ' + shop.station_name);
    console.log('サブジャンルの名前: ' + shop.sub_genre.name);
    console.log('--------------------');

    i = i + 1;
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
let shopData = {
  "results": {
    "shop": [
      {
        "name": "猿乃拳",
        "name_kana": "モンキーパンチ",
        "logo_image": "pircture/gurume１.jpg",
        "address": "東京都国分寺市本町4-1-10 国分寺シティハイツ B1F",
        "budget": { "name": "￥4,000～￥4,999 / ￥2,000～￥2,999" }, // 課題3-2の形式に合わせてください
        "mobile_access": "国分寺駅北口徒歩３分",
        "genre": { "name": "居酒屋" },
        "catch": "2時間半以上の宴会可、お祝い・サプライズ可",
        "open": "月・火・水・木・金 17:30 - 23:00 / 土・日・祝日 13:00 - 23:00",
        "station_name": "国分寺駅",
        "sub_genre": { "name": "海鮮、鍋" }
      },
      {
        "name": "酒肴庵 国分寺 恵比寿屋本店",
        "name_kana": "しゅこうあんこくぶんじ えびすや",
        "logo_image": "pircture/gurume２.jpg",
        "address": "東京都国分寺市本町3-6-12 ＦＬＡＴ瀬村　１Ｆ",
        "budget": { "name": "￥5,000～￥5,999" },
        "mobile_access": "西武国分寺線国分寺駅北口より徒歩2分...",
        "genre": { "name": "居酒屋" },
        "catch": "2時間半以上の宴会可、お祝い・サプライズ可（バースデープレート）、ドリンク持込可",
        "open": "月〜土 17:00 - 05:00 / 日 17:00 - 00:00",
        "station_name": "国分寺駅",
        "sub_genre": { "name": "鍋、海鮮" }
      }
    ]
  }
};

// let kazu = shopData.results.shop;
// let span = document.querySelector('#count');
// span.textContent = kazu.length;

function printDom(data) {
  //前回の検索結果を削除する
  let old = document.querySelector('#con');
  if (old) {
    old.remove();
  }

  let con = document.createElement('div');
  con.setAttribute('id', 'con');
  document.body.insertAdjacentElement('beforeend', con);

  let i = 1;

  for (let shop of data.results.shop) {
    let div = document.createElement('div');
    div.setAttribute('class', 'shop');
    con.insertAdjacentElement('beforeend', div);

    //h2 タグを作成して、検索結果の件数を表示する
    let h2 = document.createElement('h2');
    h2.textContent = i + '件目の検索結果';
    div.insertAdjacentElement('beforeend', h2);

    //ロゴ画像
    let img = document.createElement('img');
    img.setAttribute('src', shop.logo_image);
    img.setAttribute('alt', shop.name);
    img.setAttribute('width', '100px');
    div.insertAdjacentElement('beforeend', img);

    //店舗名
    let p1 = document.createElement('p');
    p1.textContent = '店舗名: ' + shop.name;
    div.insertAdjacentElement('beforeend', p1);

    //住所
    let p2 = document.createElement('p');
    p2.textContent = '住所: ' + shop.address;
    div.insertAdjacentElement('beforeend', p2);

    // 予算
    let p3 = document.createElement('p');
    p3.textContent = '予算: ' + shop.budget.name;
    div.insertAdjacentElement('beforeend', p3);

    // アクセス情報
    let p4 = document.createElement('p');
    p4.textContent = 'アクセス情報: ' + shop.mobile_access;
    div.insertAdjacentElement('beforeend', p4);

    // ジャンル
    let p5 = document.createElement('p');
    p5.textContent = 'ジャンル: ' + shop.genre.name;
    div.insertAdjacentElement('beforeend', p5);

    // キャッチコピー
    let p6 = document.createElement('p');
    p6.textContent = 'キャッチコピー: ' + shop.catch;
    div.insertAdjacentElement('beforeend', p6);

    // 営業時間
    let p7 = document.createElement('p');
    p7.textContent = '営業時間: ' + shop.open;
    div.insertAdjacentElement('beforeend', p7);

    // 最寄駅
    let p8 = document.createElement('p');
    p8.textContent = '最寄駅: ' + shop.station_name;
    div.insertAdjacentElement('beforeend', p8);

    // サブジャンルの名前
    let p9 = document.createElement('p');
    p9.textContent = 'サブジャンルの名前: ' + shop.sub_genre.name;
    div.insertAdjacentElement('beforeend', p9);
    i++;
  }
}
let button = document.querySelector('#search');
button.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ登録処理は以下に記述


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let keyword = document.querySelector('#keyword').value;
  let genre = '';

  if (keyword == '居酒屋') {
    genre = 'G001';
  }else if (keyword == 'ダイニングバー・バル') {
    genre = 'G002';
  }else if (keyword == '創作料理') {
    genre = 'G003';
  }else if (keyword == '和食') {
    genre = 'G004';
  }else if (keyword == '洋食') {
    genre = 'G005';
  }else if (keyword == 'イタリアン・フレンチ') {
    genre = 'G006';
  }else if (keyword == '中華') {
    genre = 'G007';
  }else if (keyword == '焼肉・ホルモン') {
    genre = 'G008';
  }else if (keyword == 'アジア・エスニック料理') {
    genre = 'G009';
  }else if (keyword == '各国料理') {
    genre = 'G010';
  }else if (keyword == 'カラオケ・パーティ') {
    genre = 'G011';
  }else if (keyword == 'バー・カクテル') {
    genre = 'G012';
  }else if (keyword == 'ラーメン') {
    genre = 'G013';
  }else if (keyword == 'カフェ・スイーツ') {
    genre = 'G014';
  }else if (keyword == 'その他グルメ') {
    genre = 'G015';
  }else if (keyword == 'お好み焼き・もんじゃ') { 
    genre = 'G016';
  }else if (keyword == '韓国料理') {
    genre = 'G017';
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
  axios.get(url)
    .then(showResult) // 通信成功
    .catch(showError) // 通信エラー
    .then(finish); // 通信の最後にいつも実行する処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data; // 通信で取得したJSONデータ
  if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    //件数を表示する
    let count = document.querySelector('#count');
    count.textContent = data.results.shop.length + '件の飲食店の情報を検索できます！';
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
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

let kazu = shopData.results.shop;
let span = document.querySelector('#count');
span.textContent = kazu.length;

function printDom(data) {
  let con = document.createElement('div');
  con.setAttribute('id', 'con');
  document.body.insertAdjacentElement('beforeend', con);

  let i = 1;

  for (let shop of shopData.results.shop) {
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
button.addEventListener('click', printDom);

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "results": {
    "api_version": "1.26",
    "results_available": 52,
    "results_returned": "10",
    "results_start": 1,
    "shop": [
      {
        "access": "京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。",
        "address": "東京都八王子市明神町４-6-12　ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F",
        "band": "可",
        "barrier_free": "なし",
        "budget": {
          "average": "ディナー3000円",
          "code": "B003",
          "name": "3001～4000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "【サプライズ演出有】 結婚パーティー受付中",
        "charter": "貸切可 ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア！50型モニター・スポットライト等充実",
        "child": "お子様連れOK",
        "close": "不定休有り。店休時は店長携帯電話09035324825まで問い合わせください♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000989843/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり",
        "free_food": "なし",
        "genre": {
          "catch": "大人の社交場非日常を味わうダイニング",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし",
        "id": "J000989843",
        "karaoke": "あり",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6585460152,
        "lng": 139.34327231,
        "logo_image": "https://imgfp.hotp.jp/IMGH/21/04/P038512104/P038512104_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業していない",
        "mobile_access": "京王八王子駅1分/JR八王子駅北口5分",
        "name": "バグダッドカフェ Bagdadcafe/モータウン MOTOWN",
        "name_kana": "ばぐだっどかふぇもーたうんはちおうじ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）",
        "other_memo": "ステージ・マイク・カラオケ等",
        "parking": "なし",
        "party_capacity": 250,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_58_s.jpg"
          }
        },
        "private_room": "あり ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "ご質問、ご要望はお気軽にお問い合わせください♪",
        "show": "あり",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "京王八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/?vos=nhppalsa000016"
        },
        "wedding": "大歓迎！ステージ・マイク・音響・映像等、設備充実！！最大200名様まで是非どうぞ★",
        "wifi": "あり"
      },
      {
        "access": "ＪＲ八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "address": "東京都八王子市東町12-14",
        "band": "不可",
        "barrier_free": "あり ：スタッフがお手伝いさせて頂きます。ご不明な点等お気軽にお声掛け下さい。事前のお問い合わせも◎",
        "budget": {
          "average": "2,000円(通常平均) 3,000円(宴会平均) ",
          "code": "B002",
          "name": "2001～3000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "2.5時間飲み放題付2000円~ 【★少人数様ソファー★】",
        "charter": "貸切可 ：八王子で人気の個室バル最大50名様まで対応できます。20名様～フロア貸切応相談　最大100名様までOK",
        "child": "お子様連れ歓迎 ：チャイルドシートもご用意しています。お子様連れのママ会・ご家族でのご利用にもお気軽にどうぞ♪",
        "close": "【年中無休】貸切宴会のご予約も絶賛受付中！最大100名様までご利用可能ですので、会社宴会 同窓会 宴会にオススメ♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ001275177/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "free_food": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "genre": {
          "catch": "八王子 個室居酒屋 飲み放題 肉バル 女子会",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし ：温かな照明と開放的な店内で楽しくご宴会♪八王子での宴会 飲み会 女子会 二次会 合コンに◎",
        "id": "J001275177",
        "karaoke": "なし",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6582259169,
        "lng": 139.3381858122,
        "logo_image": "https://imgfp.hotp.jp/IMGH/61/98/P038366198/P038366198_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業している",
        "mobile_access": "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "name": "隠れ家バル Funny&Bouquet",
        "name_kana": "かくれやばる　ふぁにーあんどぶーけ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）",
        "other_memo": "個室や貸切の詳細等お気軽にお電話にてお問い合わせください。八王子での飲み会に◎",
        "parking": "なし ：お近くのコインパーキングをご利用下さい。",
        "party_capacity": 50,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_58_s.jpg"
          }
        },
        "private_room": "なし ：個室　2名×4室　4名×8室　8名～10名×4室　20名～40名×2室",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "show": "なし",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし ：八王子で人気のお座敷個室！最大50名様まで対応できます。",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/?vos=nhppalsa000016"
        },
        "wedding": "八王子での結婚式の二次会や同窓会、打ち上げパーティー等多様なシーンにご利用下さい",
        "wifi": "あり"
      }
    ]
  }
}
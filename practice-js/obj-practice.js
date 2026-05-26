//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function print(data) {

	console.log(data.address);

	for (let building of data.buildingD) {
		console.log(building);
	}
}

// ページ表示
function printDom(data) {

	// すでに result があれば削除
	let old = document.querySelector('#result');

	if (old != null) {
		old.remove();
	}

	// div 要素作成
	let div = document.createElement('div');

	// id 属性設定
	div.setAttribute('id', 'result');

	// body の最後に追加
	document.body.insertAdjacentElement('beforeend', div);

	// 住所表示
	let p = document.createElement('p');

	p.textContent = '住所: ' + data.address;

	div.insertAdjacentElement('beforeend', p);

	// タイトル
	let h2 = document.createElement('h2');

	h2.textContent = '建物一覧';

	div.insertAdjacentElement('beforeend', h2);

	// ul 作成
	let ul = document.createElement('ul');

	// 建物表示
	for (let building of data.buildingD) {

		let li = document.createElement('li');

		li.textContent = building;

		ul.insertAdjacentElement('beforeend', li);
	}

	div.insertAdjacentElement('beforeend', ul);
}
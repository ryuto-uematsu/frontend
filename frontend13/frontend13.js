// データの定義
// 大分類
let cate1 = [
    '---',                  // 未選択
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具',
    '調理器具', //調理器具を追加
    '',
];

// 小分類
let cate2 = [
    // 0: 未選択
    ['---'],
    // 1: 家具のカテゴリ
    ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],
    // 2: ベッド・マットレスのカテゴリ
    ['ベッド', '寝具', 'マットレス'],
    // 3: 収納家具・収納グッズ'のカテゴリ
    ['家具・ラック', '収納システム'],
    // 4: 子ども家具
    ['子ども部屋家具', 'ベビー家具・ベビーグッズ'],
    // 5: 調理器具のカテゴリを追加
    ['包丁','鍋','ボウル','食器']
];

// 商品の定義 商品と価格を追加
var itemList = [
    { id: '0001', name: 'ソファベッド', price:'1000円', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0002', name: 'シングルベッド', price:'1000円', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0003', name: '子ども用ベッド', price:'1000円', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
    { id: '0004', name: 'ソファ', price:'1000円', tags: ['ソファ'] },
    { id: '0005', name: 'キューブボックス', price:'1000円', tags: ['家具・ラック', '収納システム'] },
    { id: '0006', name: 'オープンラック', price:'1000円', tags: ['家具・ラック', '収納システム'] },
    { id: '0007', name: 'コンピュータデスク', price:'1000円', tags: ['テーブル・椅子'] },
    { id: '0008', name: 'サイドテーブル', price:'1000円', tags: ['テーブル・椅子'] },
    { id: '0009', name: 'ダイニングテーブル', price:'1000円', tags: ['テーブル・椅子'] },
    { id: '0010', name: '子ども部屋用収納', price:'1000円', tags: ['収納システム', '子ども部屋家具'] },
    { id: '0011', name: '三徳包丁', price:'1000円', tags: ['包丁'] },
    { id: '0012', name: '片手鍋', price:'1000円', tags: ['鍋'] },
    { id: '0013', name: '食器セット', price:'1000円', tags: ['食器'] },
    
];



//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');
// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');
// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    /*元のfor文
    for (let i = 0; i < cate1.length; i++) {  */
    
    //アロー関数
    cate1.forEach(
        e => {
            // option要素を新規に作成
            let option = document.createElement('option');
            option.value = e;    // optionの値に配列の値を代入
            option.text = e;     // optionの表示文字列に配列の値を代入
            cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
        }
    );
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    /*元のfor文
    for (let i = 0; i < cate2[idx].length; i++) { */
    cate2[idx].forEach(
        f => {
            // option要素を新規に作成
            let option = document.createElement('option');
            option.value = f;    // optionの値に配列の値を代入
            option.text = f;     // optionの表示文字列に配列の値を代入
            cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
        }
    );
}

//　商品一覧の表示の関数
function viewItemList(tag) {
    itemListElement.innerHTML = '';
    /*元のfor文
    for (let i = 0; i < itemList.length; i++) {  */
    Object.values(itemList).forEach(
        item => {    
        
            if (item.tags.some(t => t === tag)) {
                // li要素を作成
                let li = document.createElement('li');
                // テキスト情報を作成　価格を追加
                let text = document.createTextNode(item.id + ':' + item.name+':'+item.price);
                // ul要素に追加
                li.appendChild(text);
                itemListElement.appendChild(li);
            }
        }
    );
}

//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function () {
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択にあわせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
});

// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function () {
    // 選択されば値を取得
    let val = cate2Element.value;
    viewItemList(val);

});

//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();

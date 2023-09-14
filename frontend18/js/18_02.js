let itemList = [];      // 商品一覧

//--- データの定義 ---
// 大分類
let cate1 = [];
 
 /*let json_data = JSON.stringify(cate1);
 console.log(typeof(json_data));
 console.log(json_data);*/

// 小分類
let cate2 = [];

/*let json_data = JSON.stringify(cate2);
 console.log(typeof(json_data));
 console.log(json_data);*/

//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');

// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');

// 商品リストを表示する要素を取得
let itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = "";
    //let html = "";

     //大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate1.length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate1[i];    // optionの値に配列の値を代入
        option.text = cate1[i];     // optionの表示文字列に配列の値を代入
        cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加       
    
    //html += "<option>"+cate1[i]+"</option>";
    }
    
    
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = "";

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
}

// 商品一覧をtableとして表示
function viewItemList(tag) {
    console.log(tag);
    let target = document.getElementById('itemList');

    // 商品一覧を削除
    target.innerHTML = "";

    if (tag !== undefined) {
        let html = "";
        html += "<table>";
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].tags.some(t => t === tag)) {
                if (count === 0) {
                  html += "<tr>";
                }

                // 商品情報
                html += "<td>";
                html += '<img src="img/item-sample.jpg" alt="商品の名前" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += "</td>";

                if (count == 5)  {   // 商品を横に５つ並べたら次の行に変更
                    html += "</tr>";
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += "</tr>"; // 最後に閉じる
        html += "</table>";
        target.innerHTML = html;
    }
}

//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択に合わせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
});

// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
    // 選択されば値を取得
    let val = cate2Element.value;
    viewItemList(val);
});

// 商品の大分類をファイルから取得
$(function () {
    $.ajax({
        url: 'json/cate1.json',
        dataType: 'json'
    })
    .done(function (data) {
        cate1 = data;
        console.log(cate1);
        // 大分類の生成
        setMainMenu(); 
    })
    .fail(function () {
        alert("ファイルが読み込めませんでした");
    });
});

// 商品の大分類をファイルから取得
$(function () {
    $.ajax({
        url: 'json/cate2.json',
        dataType: 'json'
    })
    .done(function (data) {
        cate2 = data;
        console.log(cate2);
        // 大分類の生成
        //setMainMenu(); 
    })
    .fail(function () {
        alert("ファイルが読み込めませんでした");
    });
});

//商品一覧をファイルから取得
$(function () {
    $.ajax({
        url: 'json/item.json',
        dataType: 'json'
    })
    .done(function (data) {
        itemList = data;
      // console.log(itemList);
        // 大分類の生成
       // setMainMenu(); 
    })
    .fail(function () {
        alert("ファイルが読み込めませんでした");
    });
});
//inputタグのid'text'を取得しtargetに代入
let target = document.getElementById('text01');
//入力欄からフォーカスが外れたとき
target.addEventListener('blur', function() {
    //alert("フォーカスが外れました");
    // console.log(target.value);
    
    // 1. target.value を取得する
    // 2. span タグを特定する
    let msg = document.getElementById('msg');
    // 3. span タグに target.value を設定する
    msg.innerText = target.value;
});
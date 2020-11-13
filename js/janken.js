// ぐー、ちょき、ぱーを配列変数で設定
hand = ["gu.png","ch.png","pa.png"];

// 表示メッセージを配列変数で設定
msg = ["「 さあ、勝負だよ 」","「 やったね！ 」","「 優しいね 」","「 仲良しだね 」"];

// ボタン押下から結果発表まで
function getplyhand(btn){

    // 自分の手取得plyへ送出
    $("#plyhand").html("<img src=img/" + hand[btn] + ">");

    // 自分の手から乱数取得comへ送出
    r = Math.floor(Math.random()*3)
    $("#comhand").html("<img src=img/" + hand[r] + ">");

    // 手の回転を止める
    clearTimeout(timer);

    // ボタンを使えなくする
    document.janken.elements[0].disabled = true;
	document.janken.elements[1].disabled = true;
    document.janken.elements[2].disabled = true;
    //リセットボタンを使えるようにする
	document.janken.elements[3].disabled = false;

    // 判定結果
    // あいこ
    var num = 3;
    // ぐ〜
    if(btn == 0 && r == 1)num = 1;
    if(btn == 0 && r == 2)num = 2;
    // ちょき
    if(btn == 1 && r == 0)num = 2;
    if(btn == 1 && r == 2)num = 1;
    // ぱ〜
    if(btn == 2 && r == 0)num = 1;
    if(btn == 2 && r == 1)num = 2;
    // 表示
    $("#message").html(msg[num]);
    
    if(num == 1){
    document.querySelector("#plyhand").style.borderColor="#f00";
    }else if(num == 2){
    document.querySelector("#comhand").style.borderColor="#f00";
    }
}

// ページ読み込み時に初期状態設定
// 手をスロットのように回転させる
timer = 0;
count = 0;
handreset();

// 初期状態へ戻す
function handreset(){
    getahand();
    // 初期状態へ
    document.janken.elements[0].disabled = false;
	document.janken.elements[1].disabled = false;
    document.janken.elements[2].disabled = false;
    //リセットボタンを使えなくする
    document.janken.elements[3].disabled = true;
    $("#message").html(msg[0]);
    document.querySelector("#comhand").style.borderColor="#000";
    document.querySelector("#plyhand").style.borderColor="#000";
}

function getahand(){
    // 手を順番に表示
    $("#plyhand").html("<img src=img/" + hand[count] + ">");
    $("#comhand").html("<img src=img/" + hand[count] + ">");
    count++;
    if(count > 2)count = 0;
    timer = setTimeout("getahand()",100);
}




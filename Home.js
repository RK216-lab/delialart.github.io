// ヘッダー要素を取得する
var header = document.querySelector("header");

// メニュー要素を取得する
var menu = document.querySelector(".menu");

// メニューボタン要素を作成する
var menuButton = document.createElement("div");
menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";

// メニューボタン要素をヘッダー要素に追加する
header.appendChild(menuButton);

// メニューボタン要素のクリックイベントを設定する
menuButton.addEventListener("click", function() {
  // メニュー要素の表示/非表示を切り替える
  menu.classList.toggle("show");
});

// ウィンドウのリサイズイベントを設定する
window.addEventListener("resize", function() {
  // ウィンドウの幅が768px以上なら
  if (window.innerWidth >= 768) {
    // メニュー要素を表示する
    menu.classList.add("show");
  } else {
    // メニュー要素を非表示にする
    menu.classList.remove("show");
  }
});

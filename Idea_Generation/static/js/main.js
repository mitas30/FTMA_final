let maxegg=8;
// モーダルウィンドウを作成する関数
function createModal(containerId, num) {
  // コンテナへの参照を取得
  let container = document.getElementById(containerId);
  let info=document.getElementById(num);

  // ボタンの作成
  let button = document.createElement('button');
  let score=info.dataset.score;
  if(27 <= score)
  {
    button.style.background='linear-gradient(to bottom, #b991f3, #9a9cf1, #add9fa, #e1ffc8, #f0fe65, #cd1c1d, #7b244d)'
  }
  else if(25 <= score)
  {
    button.style.background='linear-gradient(to right,#ffe853,#eed54a,#dec248,#a58e32,#c3b134)'
  }
  else
  {
    button.style.background='linear-gradient(to right,#fffdfe,#babcd3,#cccfde,#898b9a,#64626f,#4a4750)'
  }
  button.textContent = 'Idea ' + num;
  button.className = 'button';
  container.appendChild(button);

  // モーダルの作成
  let modal = document.createElement('div');
  modal.id = 'easyModal' + num;
  modal.className = 'modal';

  // モーダルの内容
  let content = document.createElement('div');
  content.className = 'modal-content';

  // ヘッダー
  let header = document.createElement('div');
  header.className = 'modal-header';

  let h1 = document.createElement('h1');
  h1.textContent = info.dataset.name;

  let span = document.createElement('span');
  span.className = 'modalClose';
  span.textContent = '×';

  header.appendChild(h1);
  header.appendChild(span);

  // ボディ
  let body = document.createElement('div');
  body.className = 'modal-body';

  let p1 = document.createElement('p');
  p1.textContent = info.dataset.detail;

  body.appendChild(p1);

  // 全部まとめる
  content.appendChild(header);
  content.appendChild(body);
  modal.appendChild(content);
  container.appendChild(modal);
}

// maxegg個のモーダルウィンドウを作成
for (let i = 1; i <= maxegg; i++) {
  createModal('modalsContainer' + i, i);
}

//getElementByIdはこれ
const buttonOpens = document.getElementsByClassName('button');
const modals = document.getElementsByClassName('modal');
const buttonCloses = document.getElementsByClassName('modalClose');

// 開くボタンがクリックされたときの処理
for(let i = 0; i < buttonOpens.length; i++){
  buttonOpens[i].addEventListener('click', function() {
      modals[i].style.display = 'block';
  });
}

// 閉じるボタンがクリックされたときの処理
for(let i = 0; i < buttonCloses.length; i++){
  buttonCloses[i].addEventListener('click', function() {
      modals[i].style.display = 'none';
  });
}

let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.outerHTML = '<input id="p1">';
e2.innerText = 'テキスト文字列';
e3.id = 'p5'

console.log(e3.id);
const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_xx':
      p.innerHTML = `<iframe src='./demo/w01_dom_xx/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_demo_44':
      p.innerHTML = `<iframe src='./demo/w02_demo_44/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_44':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_44/tictactoe_xx.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_44':
      p.innerHTML = `<iframe src='./demo/w03_basics_44/p1_44.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_44':
      p.innerHTML = `<iframe src='./demo/w04_basic_44/P2_44/p2_44.html' width="100%" height="100%" />`;
      break;
  }
}
function showMid1(item) {
  switch (item) {
    case 'm1_44':
      p.innerHTML = `<iframe src='./mid1_44/m1_44/src/p1_44.html' width='100%' height='100%' />`;
      break;
    case 'm2_44':
      p.innerHTML = `<iframe src='./mid1_44/m2_44/p2_44.html' width='100%' height='100%' />' />`;
      break;
    case 'm3_44':
      p.innerHTML = `<iframe src='./mid1_44/m3_44/p3_44.html' width='100%' height='100%' />`;
      break;
    case 'm4_44':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p4_xx/p4_xx.html' width="100%" height="100%" />`;
      break;
  }
}

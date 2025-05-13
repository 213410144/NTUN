const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const container = document.querySelector('.container');
const showAlert = document.querySelector('.alert');
const allLi = document.querySelectorAll('.board li');
const resetBtn = document.querySelector('.reset');
//console.log(alert);
console.log(allLi);

const checkWin = (player) => {
  let p = [];
  allLi.forEach((item)=>{
    p.push(item.classList.contains(player));
  });
  console.log('p', p);
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;
  if ( 
    ( p1 && p2 && p3) ||
    ( p4 && p5 && p6) ||
    ( p7 && p8 && p9) ||
    ( p1 && p4 && p7) ||
    ( p2 && p5 && p8) ||
    ( p3 && p6 && p9) ||
    ( p1 && p5 && p9) ||
    ( p3 && p5 && p7) 
  )
return true;
else return false;
}; 

const winMessage = (player) => {
  if (player === 'o'){
container.style.backgroundColor = 'rgba(144,238,144, 0.5)';
showAlert.style.backgroundColor= 'rgba(144,238,144, 0.5)';
showAlert.style.color ='green';
showAlert.style.display = 'block';
showAlert.textContent = 'player o wins';
console.log(`winMessage o`);
  }else {
container.style.backgroundColor = 'rgba(240,118,128, 0.726)'; 
showAlert.style.backgroundColor= 'rgba(240,118,128,0.726)';
showAlert.style.color ='purple';
showAlert.style.display = 'block';
showAlert.textContent = 'player x wins';
console.log(`winMessage x`);

  }
};

const tieMessage = () => {
  //alert.style.backgroundColor= '#888';
//alert.style.color ='#ddd';
//alert.style.display = 'block';
//alert.textContent = 'tie';

};

//console.log(`checkWin('o')` , checkWin('o'));
//console.log(`checkWin('x')` , checkWin('x'));

//tieMessage();
//winMessage('o');

const reset = () => {
  showAlert.style.display = 'none';
container.style.backgroundColor = '#666';
  allLi.forEach((item) => {
    item.textContent = '+';
    item.classList = '';
  });
  turn = 0;
  done = false;
  showAlert.style.display = 'none';
};

const go = (item, player, text) => {
  item.textContent = text;
  item.classList.add(player, 'disabled');
  if(checkWin(player)) {
    console.log(`player ${player} wins`);
    winMessage(player);
    done = true;
  }
};

allLi.forEach((item)=>{
  item.addEventListener('click', ()=>{
    if (item.classList.contains('disabled')) {
      alert('already filled');
    } else {
      if (turn % 2 ===0) {
        go(item, 'o', 'o');
      } else if (turn % 2 === 1) {
        go(item, 'x', 'x');
      }
      if (!done && turn < 8 ) turn++;
      else if (!done && turn >= 8) tieMessage();
    }
  });
});

resetBtn.addEventListener('click', reset);
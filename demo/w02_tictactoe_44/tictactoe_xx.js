const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const container = document.querySelector('.container');
const alert = document.querySelector('.alert');
const allLi = document.querySelectorAll('.board li');
const resetBtn = document.querySelector('.reset');
console.log(alert);
console.log(allLi);

const winMessage = (player) => {
  if (player === 'o'){
container.style.
backgroundColor = 'rgba(144,238,144, 0.5)';
alert.style.backgroundColor= 'rgba(144,238,144, 0.5)';
alert.style.color ='green';
alert.style.display = 'block';
alert.textContent = 'player o wins';
  }else {
//container.style.backgroundColor = 'rgba(240,118,128, 0.726)'; 
//alert.style.backgroundColor= 'rgba(240,118,128,0.726)';
//alert.style.color ='purple';
//alert.style.display = 'block';
//alert.textContent = 'player x wins';

  }
};

const tieMessage = () => {
  //alert.style.backgroundColor= '#888';
//alert.style.color ='#ddd';
//alert.style.display = 'block';
//alert.textContent = 'tie';

};

//tieMessage();
winMessage('o');

const reset = () => {
  alert.style.display = 'none';
container.style.backgroundColor = '#666';
  allLi.forEach((item) => {
    item.textContent = '+';
    item.classList = '';
  });
};

resetBtn.addEventListener('click', reset);
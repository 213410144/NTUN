import menu_44 from './data.44.js';
console.log('menu_44', menu_44);

const section = document.querySelector('.section-center');

const displayMenu_44 = () => {
  const menuInfo = menu_44.map((item) => {
    const { id, title, category, price, img, desc } = item;
    return `
                <article class="menu-item">
              <img src=${img} alt="eggs" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">
                ${desc}
                </p>
              </div>
            </article>
    `;
  }).join('');

  console.log('menuInfo', menuInfo)
  section.innerHTML = menuInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenu_44();
});
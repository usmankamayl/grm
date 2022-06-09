const goods = [
  {
    "id": 253842678,
    "name": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "name": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "name": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "name": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]

import {renderGoods} from "./modules/render.js";
import {addClassActive} from "./modules/attributes.js";
import {addAttribute} from "./modules/attributes.js";
import {removeClassActive} from "./modules/attributes.js";
import {checkedInput} from "./modules/attributes.js";
import {addNewGood} from "./modules/goods.js";
import {priceOnBlur} from "./modules/price.js";
import {removeRow} from "./modules/render.js";
import {getTotalPrice} from "./modules/price.js";


renderGoods(goods);
addClassActive();
addAttribute();
removeClassActive();
checkedInput();
addNewGood();
priceOnBlur();
removeRow();
getTotalPrice();


const btnPic = document.querySelectorAll('.table__btn_pic');

btnPic.forEach(el => {
  el.addEventListener('click', () => {
    open(`${el.dataset.pic}`, '', 'width=800, height=600, top=132, left=368');
  })
})
console.log(window.screen);

const modalFile = document.querySelector('.modal__file');

modalFile.addEventListener('change', () => {
  const img = document.createElement('img');
  if (modalFile.files.length > 0) {
    const src = URL.createObjectURL(modalFile.files[0]);
    console.log(modalFile.files[0])
    console.log(src, ": src")
    img.src = src;
    img.style.cssText = `
  width: 100px;
  height: 50px;
  `;
  }

  if (modalFile.files[0].size < 1048576) {
    modalFile.insertAdjacentElement('beforebegin', img);
  } else {
    console.log('1024');
    modalFile.insertAdjacentHTML('beforebegin', '<p class="img-text" style="color: red;font-size: 18px">изображение не должно превышать размер 1 мб</p>');
  }

})



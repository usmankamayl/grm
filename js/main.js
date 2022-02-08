'use strict';

const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheckbox = document.querySelector('.modal__checkbox');
const modalInput = document.querySelector('.modal__checkbox + .modal__input');
const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');

const goods = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
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
    "title": "Радиоуправляемый автомобиль Cheetan",
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
    "title": "ТВ приставка MECOOL KI",
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
    "title": "Витая пара PROConnect 01-0043-3-25",
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



const tableBody = document.querySelector('.table__body');

const element = {
  td: {
    class: ['table__cell', 'table__cell_left', 'table__cell_name', 'table__cell_btn-wrapper'],
  },
  button: {
    class: ['table__btn', 'table__btn_pic', 'table__btn_pic_edit', 'table__btn_del'],
  },
}


function createRow(obj) {
  const fragment = document.createDocumentFragment();
  const tr = document.createElement('tr');
  for (let i = 0; i < 8; i++) {
   const td = document.createElement('td');
    td.classList.add(obj.td.class[0]);
    if (i === 1) {
      td.classList.add(obj.td.class[1], obj.td.class[2]);
    }
    if (i === 2) {
      td.classList.add(obj.td.class[1]);
    }

    if (i === 7) {
      td.classList.add(obj.td.class[3]);
    }
    fragment.append(td);
  }
  tr.append(fragment);

  const btnWrapper = document.querySelectorAll('.table__cell_btn-wrapper');

  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.classList.add(obj.button.class[0]);
    if (i === 0) {
      button.classList.add(obj.button.class[1]);
    }
    if (i === 1) {
      button.classList.add(obj.button.class[2]);
    }

    if (i === 2) {
      button.classList.add(obj.button.class[3]);
    }
    tr.lastElementChild .append(button);
  }

  return tr;
}


function renderGoods(arr) {

  for (let i = 0; i < arr.length; i++) {
    const row = createRow(element);
    tableBody.append(row);
  }
   const tr = tableBody.querySelectorAll('tr');
   console.log(tr, 123333);
  tr.forEach((item, i) => {
    const td = item.querySelectorAll('td');
    td[0].textContent = arr[i].id;
    td[1].textContent = arr[i].title;
    td[2].textContent = arr[i].category;
    td[3].textContent = arr[i].units;
    td[4].textContent = arr[i].count;
    td[5].textContent = arr[i].price;
  })
}

renderGoods(goods);



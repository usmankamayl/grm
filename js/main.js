'use strict';
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

const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheckbox = document.querySelector('.modal__checkbox');
const modalInput = document.querySelector('.modal__checkbox + .modal__input');
const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');
const btnAddGood = document.querySelector('.panel__add-goods');
const btnCloseModal = document.querySelector('.modal__close');
const overlayModal = document.querySelector('.modal');
const tableBody = document.querySelector('.table__body');
const totalPrice = modalForm.querySelector('.modal__total-price');
let id;

function createRow(obj) {
  const tr = document.createElement('tr');
  tr.innerHTML = ` <td class="table__cell">${obj.id}</td>
                <td class="table__cell table__cell_left table__cell_name" data-id="246016548">
                <span class="vendor-code__id">${obj.id}</span>
                ${obj.name}
                </td>
                <td class="table__cell table__cell_left">${obj.category}</td>
                <td class="table__cell">шт</td>
                <td class="table__cell">${obj.count}</td>
                <td class="table__cell">${obj.price}</td>
                <td class="table__cell table__cell-price">${obj.count * obj.price}</td>
                <td class="table__cell table__cell_btn-wrapper">
                  <button class="table__btn table__btn_pic"></button>
                  <button class="table__btn table__btn_edit"></button>
                  <button class="table__btn table__btn_del"></button>
                </td>`;
  return tr;
}

function renderGoods(arr) {
  arr.forEach(item => {
    tableBody.append(createRow(item));
  })
}

renderGoods(goods);

btnAddGood.addEventListener('click', () => {
  overlay.classList.add('active');
    id = +([1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)).reduce((a, b)=> {
    return a.toString() + b.toString();
  });
});

modalForm.querySelectorAll('input').forEach(input => {
  if (input.name === 'count' || input.name === 'discount_count' || input.name === 'price' || input.name === 'count') {
    input.setAttribute('type','number');
  }
  if (input.name !== 'image') {
    input.setAttribute('required', 'true');
  }

})

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('active');
  }
});

function getTotalPrice () {
  const total = Array.from(tableBody.querySelectorAll('.table__cell-price'));
  let allTotal = 0;
  total.forEach(el => {
    allTotal += Number(el.textContent);
  })
  document.querySelector('.crm__total-price').textContent = allTotal;
  return allTotal;
}

modalCheckbox.addEventListener('change', () => {
  if (modalCheckbox.checked) {
    modalInput.removeAttribute('disabled');
  } else {
    modalInput.setAttribute('disabled', 'disabled');
    modalInput.value = '';
  }
})

modalForm.total.value = `$ 0`;
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData(e.target);
  const newGood = Object.fromEntries(form);
  newGood.id = id;
  tableBody.append(createRow(newGood));
  getTotalPrice();
  modalForm.total.textContent = `$ 0`;
  removeRow();
  e.target.reset();
});

modalForm.price.addEventListener('blur', () => {
  modalForm.total.value = `$ ${modalForm.price.value * modalForm.count.value}`;
});

function removeRow () {
  const rows = tableBody.querySelectorAll('.table__body tr');
  rows.forEach((row, index) => {
    row.addEventListener('click', e => {
      if (e.target.closest('.table__btn_del')) {
        row.remove();
        getTotalPrice();
      }
    })
  });
}

removeRow();
getTotalPrice();

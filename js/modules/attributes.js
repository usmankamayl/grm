import {modalForm} from "./price.js";
export const overlay = document.querySelector('.overlay');
const modalInput = document.querySelector('.modal__checkbox + .modal__input');
const modalCheckbox = document.querySelector('.modal__checkbox');
const btnAddGood = document.querySelector('.panel__add-goods');
export let id;

export const addClassActive = function () {
  btnAddGood.addEventListener('click', () => {
    overlay.classList.add('active');
    id = +([1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)).reduce((a, b)=> {
      return a.toString() + b.toString();
    });
  });
}

export const addAttribute = function () {
  modalForm.querySelectorAll('input').forEach(input => {
    if (input.name === 'count' || input.name === 'discount_count' || input.name === 'price' || input.name === 'count') {
      input.setAttribute('type','number');
    }
    if (input.name !== 'image') {
      input.setAttribute('required', 'true');
    }

  })
}

export const removeClassActive = function () {
  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.closest('.modal__close')) {
      overlay.classList.remove('active');
    }
  });
}

export const checkedInput = function () {
  modalCheckbox.addEventListener('change', () => {
    if (modalCheckbox.checked) {
      modalInput.removeAttribute('disabled');
    } else {
      modalInput.setAttribute('disabled', 'disabled');
      modalInput.value = '';
    }
  })
}

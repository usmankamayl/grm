import {createRow} from "./create.js";
import {getTotalPrice} from "./price.js";
import {tableBody} from "./price.js";
import {overlay} from "./attributes.js";
export const renderGoods = function (arr) {
  overlay.classList.remove('active');
  arr.forEach(item => {
    tableBody.append(createRow(item));
  })
}

export const removeRow = function  () {
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

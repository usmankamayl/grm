import {createRow} from "./create.js";
import {getTotalPrice} from "./price.js";
import {removeRow} from "./render.js";
import {modalForm} from "./price.js";
import {tableBody} from "./price.js";
import {id} from "./attributes.js";
export const addNewGood = function () {
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
}

export const modalForm = document.querySelector('.modal__form');
export const tableBody = document.querySelector('.table__body');

export const getTotalPrice = function  () {
  const total = Array.from(tableBody.querySelectorAll('.table__cell-price'));
  let allTotal = 0;
  total.forEach(el => {
    allTotal += Number(el.textContent);
  })
  document.querySelector('.crm__total-price').textContent = allTotal;
  return allTotal;
}

export const priceOnBlur = function () {
  modalForm.price.addEventListener('blur', () => {
    modalForm.total.value = `$ ${modalForm.price.value * modalForm.count.value}`;
  });
}

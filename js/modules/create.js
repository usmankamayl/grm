export const createRow = function (obj) {
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

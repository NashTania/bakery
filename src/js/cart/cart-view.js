import AbstractView from '../common/abstract-view.js';

function CartView() {
  AbstractView.apply(this, arguments)
}

CartView.prototype = new AbstractView();

CartView.prototype.template = './src/js/cart/cart.html'

CartView.prototype.renderView = function() {
  var arrScreen = this.controller.model.data;
  for (var g = 0; g < arrScreen.length; g++) {
    var cardItem = arrScreen[g];
    var divVertical = document.createElement('div');
    var table = document.getElementById('tableContainer');
    table.appendChild(divVertical);
    divVertical.classList.add("flex-table");
    divVertical.classList.add("flex-vertical");

    var divRow = document.createElement('div');
    divVertical.appendChild(divRow);
    divRow.classList.add("flex-table");
    divRow.classList.add("table-row");

    var rowCell1 = document.createElement('div');
    divRow.appendChild(rowCell1);
    rowCell1.classList.add('row-cell');
    rowCell1.classList.add('flex-1');

    var imgCart = document.createElement('img');
    rowCell1.appendChild(imgCart);
    imgCart.classList.add('img-table');
    imgCart.src = './src/' + cardItem.img;

    var divVerticalCell = document.createElement('div');
    divRow.appendChild(divVerticalCell);
    divVerticalCell.classList.add('flex-table');
    divVerticalCell.classList.add('flex-vertical');

    var rowCell2 = document.createElement('div');
    divVerticalCell.appendChild(rowCell2);
    rowCell2.classList.add('row-cell');
    rowCell2.classList.add('flex-2');

    var nameP = document.createElement('p');
    rowCell2.appendChild(nameP);
    nameP.classList.add('tb-text');
    nameP.innerText = cardItem.name;

    var rowCell3 = document.createElement('div');
    divVerticalCell.appendChild(rowCell3);
    rowCell3.classList.add('row-cell');
    rowCell3.classList.add('flex-3');

    var priceP = document.createElement('p');
    rowCell2.appendChild(priceP);
    priceP.classList.add('tb-text');
    priceP.classList.add('price');
    priceP.innerText = cardItem.price + ' руб.';
    priceP.value = cardItem.price;

    var rowCell4 = document.createElement('div');
    divRow.appendChild(rowCell4);
    rowCell4.classList.add('row-cell');
    rowCell4.classList.add('flex-4');

    var weighP = document.createElement('p');
    rowCell4.appendChild(weighP);
    weighP.classList.add('tb-text');
    weighP.innerText = cardItem.weigh + " кг";

    var rowCell5 = document.createElement('div');
    divRow.appendChild(rowCell5);
    rowCell5.classList.add('row-cell');
    rowCell5.classList.add('flex-4');

    var removeLabel = document.createElement('label');
    rowCell5.appendChild(removeLabel);
    var removeInput = document.createElement('input');
    removeLabel.appendChild(removeInput);
    removeInput.type = "submit";
    removeInput.value = 'Удалить';
    removeInput.classList.add('button-remove');
    removeInput.id = "removeButton"
    removeLabel.htmlFor = removeInput.id;
    removeInput.setAttribute('data-id', cardItem.id);

  }
  var pTotal = document.createElement('p');
  table.appendChild(pTotal);
  pTotal.classList.add('total');
  pTotal.id = 'totalP';
  pTotal.innerText = 'Итого: ' + this.controller.model.priceCalculation() + 'р.';

  var self = this;
  $('.button-remove').click(function(event) {
    self.controller.onRemoveClick(event)
  })
}


export default CartView;

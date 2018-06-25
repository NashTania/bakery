function CartView(model, controller) {
  AbstractView.apply(this, arguments)
}

CartView.prototype = new AbstractView();

CartView.prototype.renderView = function(data) {
  var cardArray = JSON.parse(data[0].result);
  var productsArray = JSON.parse(data[1].result);
  var arrScreen = [];
  nevImput : for (var i = 0; i < cardArray.length; i++) {
    var cardID = cardArray[i];

    for (var j = 0; j < productsArray.length; j++) {
      var product = productsArray[j];
      if (product.id === + cardID) {
        arrScreen.push(product);
        continue nevImput;
      }
    }
  }
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
    imgCart.src = cardItem.img;

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
  var sum = 0;
  var productsPrice = document.querySelectorAll('.price');
  for (var j = 0; j < productsPrice.length; j++) {
    var price = productsPrice[j].value;
    sum += + price;

    pTotal.innerText = 'Итого: ' + sum + 'р.';
  }
  $('.button-remove').click(function(event) {
    var removeId = event.target.dataset.id;
    CartView.prototype.remove(removeId)
  })
}

CartView.prototype.remove = function(id) {
  var cartArray = [];
  var userId = CartModel.prototype.getCartId();

  $.ajax({
    type: "POST",
    url: "https://fe.it-academy.by/AjaxStringStorage2.php",
    data: {
      f: 'READ',
      n: 'tatiana_tkachenko_FD2_cakeStudio_cart_' + userId
    },
    success: function(data) {
      if (data.result) {
        var cartArray = JSON.parse(data.result);
        var removeId = id;
        for (var i = 0; i < cartArray.length; i++) {
          if (cartArray[i] === removeId) {
            cartArray.splice(i, 1);
            break;
          }
        }
      }
      sendRequest('tatiana_tkachenko_FD2_cakeStudio_cart_' + userId, cartArray);
      alert('товар удален');
      renderItemToCard(data)
    }
  })
}

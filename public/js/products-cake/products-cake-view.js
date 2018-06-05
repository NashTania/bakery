function ProductsCakeView() {
  AbstractView.apply(this, arguments);
}

ProductsCakeView.prototype = new AbstractView();

ProductsCakeView.prototype.template = 'products_cake.html';

ProductsCakeView.prototype.renderView = function(data) {
  var self = this;
  console.log(data)
  var products = JSON.parse(data.result);
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var flexContainer = document.getElementById('flexContainer');
    var card = document.createElement('div');
    flexContainer.appendChild(card);
    card.classList.add("card-text-three");
    card.classList.add(product.type);
    imgCard = document.createElement('img');
    card.appendChild(imgCard);
    imgCard.classList.add('type-img');
    imgCard.src = product.img;

    var hover = document.createElement('div');
    card.appendChild(hover);
    hover.classList.add('hover-block');

    var background = document.createElement('div');
    hover.appendChild(background);
    background.classList.add('background');

    var info = document.createElement('div')
    hover.appendChild(info);
    info.classList.add("product-info");

    var productName = document.createElement('p');
    info.appendChild(productName);
    productName.classList.add("product-name");
    productName.innerText = product.name;

    var productPrice = document.createElement('p');
    info.appendChild(productPrice);
    productPrice.classList.add("p-price");
    productPrice.innerText = (product.price + 'р.' + ' / ' + product.weigh + 'кг');

    var labelButton = document.createElement('label');
    info.appendChild(labelButton);
    var inputButton = document.createElement('input');
    labelButton.appendChild(inputButton);
    inputButton.type = "submit";
    inputButton.value = 'В корзину';
    inputButton.classList.add('button-cart');
    inputButton.id = "button-cart"
    labelButton.htmlFor = inputButton.id;
    inputButton.setAttribute('data-id', product.id);
  }
  $('.button-cart').click(function(event) {
    self.controller.onAddCart(event)
  })

  function sortCard() {
    var result = [];
    var productsArr = self.controller.model.data;
    var products = JSON.parse(productsArr.result);
    var salutValue = salutation.value;
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      if (salutation.value === 'Выберите категорию') {
        result.push(product);
      } else if (salutation.value === product.type) {
        result.push(product);
      }
    }
    result = JSON.stringify(result);
    var data = {};
    data.result = result;
    $('.card-text-three').hide();
    self.renderView(data)
  }

  $('#salutation').selectmenu({
    change: function(event, ui) {
      sortCard();
    }
  })
}

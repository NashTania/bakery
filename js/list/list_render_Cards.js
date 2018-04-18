$('#flexContainer').load(function drawingOfCards(){
  $.ajax({
    type: "POST",
    url: "https://fe.it-academy.by/AjaxStringStorage2.php",
    data: {
      f:'READ',
      n:'tatiana_tkachenko_FD2_cakeStudio_products',

    },

      success:function(data){
        var products = JSON.parse(data.result);
          for(var i = 0; i < products.length; i++) {
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

          setTimeout (function(){
            $('.button-cart').click(function(event){
              var objID = event.target.dataset.id;
              addProductToCart(objID);
            })
          }, 50)

          function sortCard() {
            var salutValue = salutation.value;

              var result = [];
              nevImput:
              for(var i = 0; i < products.length; i++) {
                var product = products[i];
                  if(salutValue === 'Выберите категорию' ) {
                        result.push(product);
                  $('.card-text-three').show();
                }

                  else if(salutValue === 'Свадебные торты' ) {
                      if(product.type === 'wedding'){
                        result.push(product);
                      }
                  $('.card-text-three').hide();
                  $('.wedding').show();
                }

                else if(salutValue === 'Детские торты' ) {
                    if(product.type === 'children'){
                      result.push(product);
                    }
                    $('.card-text-three').hide();
                    $('.children').show();
                }

                else if(salutValue === 'На день рождения' ) {
                    if(product.type === 'birthday'){
                      result.push(product);
                      continue nevImput;
                    }
                    $('.card-text-three').hide();
                    $('.birthday').show();
                }

                else if(salutValue === 'Тематические торты' ) {

                    if(product.type === 'thematic'){
                      result.push(product);
                    }
                    $('.card-text-three').hide();
                    $('.birthday').show();
                }
              }
          }
          $('#salutation').selectmenu({
            change: function( event, ui ) {
              sortCard();
            }
          })
      }
    });
})

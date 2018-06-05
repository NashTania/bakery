$(document).ready(function(){ // Move to view
  $('#orderForm').validate({
    rules:{
      name:{
        required: true,
        minlength: 2,
        maxlength: 20
      },

      phone:{
        required: true,
        number: true,
      },

      street:{
        required: true,
      },

      home:{
        required: true,
      },

      flat:{
        required: true,
      },

      date:{
        required: true,
        number: true,
      }
    },

    messages:{
       name:{
         required: "Это поле обязательно для заполнения",
         minlength: "Имя должно быть минимум 2 символа",
         maxlength: "Максимальное число символов - 20",
         },

       phone:{
         required: "Это поле обязательно для заполнения",
         number: 'В номере могут быть только цифры',
        },

        street:{
          required:  "Это поле обязательно для заполнения",
        },

        home:{
          required: "Это поле обязательно для заполнения",
        },

        flat:{
          required: "Это поле обязательно для заполнения",
        },

        date:{
          required: "Это поле обязательно для заполнения",
          number: true,
        }
       }

  });
});

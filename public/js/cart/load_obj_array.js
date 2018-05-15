function loadObjArr(resolve) {
$.ajax({
  type: "POST",
  url: "https://fe.it-academy.by/AjaxStringStorage2.php",
  data: {
    f: 'READ',
    n: 'tatiana_tkachenko_FD2_cakeStudio_products'
  },
  success: resolve
})
}

/**
 * Created by braian on 5/28/17.
 */
$(document).ready(function () {
  $('.my-carousel').not('.slick-initialized').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true
  })
  $('#menu-burger').click(function () {
    $('#menu-list').toggleClass('is-active');
  })
  generarPublicidad();
});


function generarPublicidad () {
  var smallImages = ["src/adds/small/Black y decker.jpg",
                     "src/adds/small/bosch.jpg",
                     "src/adds/small/conarco banner fijo.jpg",
                     "src/adds/small/Crossman.jpg",
                     "src/adds/small/fmt.jpg",
                     "src/adds/small/Karcher.jpg",
                     "src/adds/small/libus.jpg",
                     "src/adds/small/Ombu.jpg",
                     "src/adds/small/sekur.jpg"];
  var bigImages = ["src/adds/big/banner kuwait butano.png",
                   "src/adds/big/REBEL.jpg",
                   "src/adds/big/stanley-jardin.gif"];
  var response = '';
  if (Math.random() > 0.50) {
    var aux = Math.floor(bigImages.length * Math.random());
    response += '<img src="' + bigImages[aux] + '" class="publicidad">';
  } else {
    var auxArr = [];
    for (var i= 0; i< 3; i++) {
      var found = false;

      while ( !found ) {
        aux = Math.floor(smallImages.length * Math.random());
        if (auxArr.indexOf(aux) === -1) {
          auxArr[i] = aux;
          response += '<img src="' + smallImages[aux] + '" class="publicidad">';
          found = true;
        }
      }

    }
  }
  var $column = $('#test');
  var html = $.parseHTML(response);
  $column.append(html);
  return response;
}